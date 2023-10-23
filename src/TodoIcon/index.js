import { ReactComponent as CheckSVG } from '../TodoIcon/CompleteIcon/complete.svg';
import { ReactComponent as DeleteSVG } from '../TodoIcon//DeleteIcon/delete.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
  "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon };