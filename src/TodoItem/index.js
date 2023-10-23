import "./TodoItem.css";
import { CompleteIcon } from "../TodoIcon/CompleteIcon/index.js";
import { DeleteIcon } from "../TodoIcon/DeleteIcon/index.js";

function TodoItem(props) 
{
  return (
    <li className="TodoItem">
    <CompleteIcon
      completed={props.completed}
      onComplete={props.onComplete}
    />

    <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
      {props.text}
    </p>

    <DeleteIcon
      onDelete={props.onDelete}
    />
  </li>
  );
}
export {  TodoItem };