import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let state = {
    postsData: [
        { id: 1, post: "yo", likesCount: 12 },
        { id: 2, post: "It's my fist post.", likesCount: 11 },
        { id: 3, post: "0", likesCount: 50 }]
};


it( "length of postsData shoul be incremented", () => {
    // 1. start data
    let action = addPostActionCreator('It-kama');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected data
    expect(newState.postsData.length).toBe(4);

});

it( "message 4 of newState shoul be correct", () => {
    // 1. start data
    let action = addPostActionCreator('It-kama');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected data
    expect(newState.postsData.message[3]).toBe('It-kama');

});

it( "after deleting length of postsData should be decrement ", () => {
    // 1. start data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected data
    expect(newState.postsData.length).toBe(2);

});

it( " length of postsData should not be decrement if postId incorrect", () => {
    // 1. start data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected data
    expect(newState.postsData.length).toBe(3);

});