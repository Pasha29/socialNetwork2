import profileReducer, { addPostAC, deleteAC } from "./profileReducer";

let state = {
    postMessages: [
        { id: 1, textPost: 'Hi' },
        { id: 2, textPost: 'Hello' }
    ]
}

it('post should be added', () => {
    let action = addPostAC('newText');
    let newState = profileReducer(state, action);

    expect(newState.postMessages.length).toBe(3);
})

// it('post message correct', () => {
//     let action = addPostAC('newText');
//     let newState = profileReducer(state, action);

//     expect(newState.postMessages[2].textPost).toBe('newText');
// })

// it('post deleting', () => {
//     let action = deleteAC(1);
//     let newState = profileReducer(state, action);

//     expect(newState.postMessages.length).toBe(1);
// })