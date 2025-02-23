const Add = ({ profileIcon }) => {
  return (
    <>
      <div>
        <input placeholder="Add a comment…" type="text" />
        <div>
          <img src={profileIcon} />
          <button className="uppercase">send</button>
        </div>
      </div>
    </>
  );
};

export default Add;
