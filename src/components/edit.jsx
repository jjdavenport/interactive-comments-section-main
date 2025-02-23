import icon from "../assets/icon-edit.svg";

const Edit = () => {
  return (
    <>
      <button className="flex gap-2">
        <img src={icon} alt={icon} />
        Edit
      </button>
    </>
  );
};

export default Edit;
