import replyIcon from "../assets/icon-reply.svg";
import editIcon from "../assets/icon-edit.svg";
import deleteIcon from "../assets/icon-delete.svg";

const Button = ({ type, onClick }) => {
  const props =
    type === "delete"
      ? {
          src: deleteIcon,
          text: "Delete",
          className: "text-softRed",
        }
      : type === "edit"
        ? {
            src: editIcon,
            text: "Edit",
            className: "text-moderateBlue",
          }
        : {
            src: replyIcon,
            text: "Reply",
            className: "text-moderateBlue",
          };

  return (
    <button
      className={`${props.className} flex items-center gap-2 font-medium`}
      onClick={onClick}
    >
      <img src={props.src} alt={props.text} />
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
