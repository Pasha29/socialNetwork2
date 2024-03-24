import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (state) => {
        root.render(
    <React.StrictMode>
        <App state={state} addPost={store.addPost.bind(store)} onChangeFunc={store.onChangeFunc.bind(store)} />
    </React.StrictMode>
    );
}
