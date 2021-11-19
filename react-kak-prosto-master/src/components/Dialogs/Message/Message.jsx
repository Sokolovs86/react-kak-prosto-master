import React from "react";
import ss from "./../Dialogs.module.css";

const Message = (props) => {

// let newMessageElement = React.createRef();

// let addMessages = () => {
//   let text = newMessageElement.current.value;
//   alert(text);
// }

return (
  
    <div>
      <div className={ss.message}>{props.message}</div>
      {/* <div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessages}>Add message</button>
        </div>
      </div> */}
    </div>
);
};

export default Message;
