const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
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
        { id: 4, textMessage: 'Text message 4' },
        { id: 5, textMessage: 'Text message 5' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE: 
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 5,textMessage: action.messageInput }]
            }
        default:
            return state;
    }
}

export default dialogsReducer;



export let addMessageAC = (messageInput) => ({ type: ADD_MESSAGE, messageInput: messageInput })