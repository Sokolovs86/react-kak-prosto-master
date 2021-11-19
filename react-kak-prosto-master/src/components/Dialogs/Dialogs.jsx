import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import ss from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  //let state = props.store.getState().dialogsPage;
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    //props.store.dispatch(sendMessageCreator());
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    // e = event
    let body = e.target.value;
    //props.store.dispatch(updateNewMessageBodyCreator(body));
    props.updateNewMessageBody(body);
  };

  // let newMessageElement = React.createRef();

  // let addMessages = () => {
  // let text = newMessageElement.current.value;
  // alert(text);
  // }

  // let d= {
  //   id: 2,
  //   name: 'Dimas',
  // };

  return (
    <div className={ss.dialogs}>
      {/* <h3>My messages</h3>
      <div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessages}>Add message</button>
        </div>
      </div> */}

      <div className={ss.dialogsItems}>{dialogsElements}</div>
      <div className={ss.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
