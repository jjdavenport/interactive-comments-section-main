import replyIcon from "../assets/icon-reply.svg";
import editIcon from "../assets/icon-edit.svg";
import deleteIcon from "../assets/icon-delete.svg";

const Button = ({ type, onClick, className }) => {
  const props =
    type === "delete"
      ? {
          src: deleteIcon,
          text: "Delete",
        }
      : type === "edit"
        ? {
            src: editIcon,
            text: "Edit",
          }
        : {
            src: replyIcon,
            text: "Reply",
          };

  return (
    <button
      className={`${className} flex items-center gap-1`}
      onClick={onClick}
    >
      <img src={props.src} alt={props.text} />
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
