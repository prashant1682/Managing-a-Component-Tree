import React, { useState } from "react";

function ToDoItems(props) {
  function handleClick() {}

  return (
    <li
      onClick={() => {
        props.onCheked(props.id);
      }}
    >
      {props.todoItem}
    </li>
  );
}

// Strick trough the text in the list feature
// function ToDoItems(props) {
//   const [currentState, setCurrentState] = useState(false);

//   function handleClick() {
//     setCurrentState(function (prevValue) {
//       //Will return the opposit of the previous value ,
//       return !prevValue;
//     });
//   }
//   return (
//     <li
//       onClick={handleClick()}
//       style={{ textDecoration: currentState ? "line-through" : "none" }}
//     >
//       {props.todoItem}
//     </li>
//   );
// }

export default ToDoItems;
