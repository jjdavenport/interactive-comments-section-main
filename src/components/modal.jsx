const Modal = () => {
  return (
    <>
      <dialog>
        <span>Delete comment</span>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div>
          <button className="uppercase">no , cancel</button>
          <button className="uppercase">yes, delete</button>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
