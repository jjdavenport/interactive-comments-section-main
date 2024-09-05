import icon from "./assets/icon-delete.svg";

const Delete = ({ open }) => {
  return (
    <>
      <button onClick={open}>
        <img src={icon} alt={icon} />
        Delete
      </button>
    </>
  );
};

export default Delete;
