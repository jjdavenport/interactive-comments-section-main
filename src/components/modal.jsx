const Modal = ({ onClose, onDelete }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <dialog className="flex w-11/12 flex-col gap-3 rounded-lg p-6 md:w-80">
          <span className="text-xl font-medium text-darkBlue">
            Delete comment
          </span>
          <p className="text-grayishBlue">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="w-full rounded-lg bg-grayishBlue px-3 py-[0.625rem] uppercase text-white"
            >
              no , cancel
            </button>
            <button
              onClick={onDelete}
              className="bg w-full rounded-lg bg-softRed px-3 py-[0.625rem] uppercase text-white"
            >
              yes, delete
            </button>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Modal;
