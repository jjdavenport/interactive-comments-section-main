const Modal = ({ close }) => {
  return (
    <>
      <dialog className="block">
        <span>Delete comment</span>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div>
          <button className="uppercase">no , cancel</button>
          <button onClick={() => close(false)} className="uppercase">
            yes, delete
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
