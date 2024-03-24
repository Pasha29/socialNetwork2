import profileReducer from "./Reducers/profileReducer";
import dialogsReducer from "./Reducers/dialogsReducer";

////// ЗАМЕНИЛИ STATE НА STORE ////////

let store = {
    _state: {
        profilePage: {
            postMessages: [
                { id: 1, textPost: 'Hi' },
                { id: 2, textPost: 'Hello' }
            ],
            newPostText: 'Text post'
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'User1' },
                { id: 2, name: 'User2' },
                { id: 3, name: 'User3' },
                { id: 4, name: 'User4' }
            ],
            messagesData: [
                { id: 1, textMessage: 'Text message 1' },
                { id: 2, textMessage: 'Text message 2' },
                { id: 3, textMessage: 'Text message 3' },
                { id: 4, textMessage: 'Text message 4' }
            ],
            newMessageText: 'Text message'
        }
    },

    _rerenderTree() {
        console.log('123');
    },

    subscribe(observer) {
        this._rerenderTree = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);

        this._rerenderTree(this._state);
    }
}

export default store;
