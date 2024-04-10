import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import UsersContainer from './Components/Users/UsersContainer';

// import DialogsContainer from './Components/Dialogs/DialogsContainer';
// import ProfileContainer from './Components/Profile/ProfileContainer';

import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Common/Login/Login';
import Preloader from './Components/Common/Preloader/Preloader';
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';
import { initializeStateTC } from './Redux/Reducers/appReducer';
import store from './Redux/Store';

const DialogsContainer = React.lazy( () => import('./Components/Dialogs/DialogsContainer') )
const ProfileContainer = React.lazy( () => import('./Components/Profile/ProfileContainer') )

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  
  return ComponentWithRouterProp;
}

class App extends React.Component {

  componentDidMount() {
    this.props.initializeStateTC();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
        <div className="wrapper">
        <React.Suspense fallback={<Preloader />}>
          <HeaderContainer />
          <Navbar />
          <div className="contentWrapper">
            <Routes>
              <Route path="/profile/:userId?" element={ <ProfileContainer /> } />
              {/* <Route path="/profile/*" element={<ProfileContainer />} /> */}

              <Route path="/dialogs/*" element={ <DialogsContainer />} />
              
              <Route path="/users/*" element={<UsersContainer />} />

              <Route path="/login" element={<Login />} />

              <Route path="/" element={ <Navigate to={'/profile'}/>} />
            </Routes>
          </div>

          <Footer />
          </React.Suspense>
        </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}
        

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeStateTC }))(App);

 let MainAppContainer = (props) => {
   return (
   <Provider store={store}>
     <HashRouter>
      <AppContainer />
     </HashRouter>
   </Provider>
   )
}

export default MainAppContainer;