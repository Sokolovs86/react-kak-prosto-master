import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "Cool, I'am the best", likesCount: 20 },
      ],
      newPostText: "it-kabzda", //"it-kabzda"
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Andrei" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Artem" },
        { id: 4, name: "Lev" },
        { id: 5, name: "Petr" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi Hi" },
        { id: 3, message: "Hello" },
        { id: 4, message: "Hello pa" },
        { id: 5, message: "Yo" },
      ],
      newMessageBody: "",
    },
    sidebar: {
      //sidebarPage: [{}],
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // паттерн observer addEventListener похож на publisher-subscriber
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST,
//   };
// };

// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text,
//   };
// };

export default store;
window.store = store;
