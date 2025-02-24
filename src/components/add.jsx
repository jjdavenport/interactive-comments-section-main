const Add = ({ img }) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-4 rounded-lg bg-white p-4">
        <textarea
          className="h-24 w-full resize-none appearance-none rounded-lg border border-lightGray px-5 py-3 focus:outline-none"
          placeholder="Add a comment…"
        />
        <div className="flex justify-between">
          <img className="w-8 object-contain" src={img} />
          <button
            type="submit"
            className="rounded-lg bg-moderateBlue px-8 py-[0.625rem] uppercase text-white"
          >
            send
          </button>
        </div>
      </form>
    </>
  );
};

export default Add;
