const Add = ({ img }) => {
  return (
    <>
      <form noValidate className="bg-white p-4">
        <textarea
          className="w-full resize-none appearance-none border border-gray-400 p-4 focus:outline-none"
          placeholder="Add a comment…"
        />
        <div className="flex justify-between">
          <img src={img} />
          <button type="submit" className="uppercase">
            send
          </button>
        </div>
      </form>
    </>
  );
};

export default Add;
