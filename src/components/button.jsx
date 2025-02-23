import replyIcon from "../assets/icon-reply.svg";
import editIcon from "../assets/icon-edit.svg";
import deleteIcon from "../assets/icon-delete.svg";

const Button = ({ type, onClick, className }) => {
  const propType = [
    type === "delete"
      ? {
          src: deleteIcon,
          text: "Delete",
        }
      : type === "edit"
        ? {
            src: editIcon,
            text: "edit",
          }
        : {
            src: replyIcon,
            text: "reply",
          },
  ];

  return (
    <>
      <button className={`${className} flex gap-1`} onClick={onClick}>
        <img src={propType} />
        {propType}
      </button>
    </>
  );
};

export default Button;
