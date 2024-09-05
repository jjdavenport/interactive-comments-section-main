const Input = ({ img }) => {
  return (
    <>
      <section>
        <input type="text" placeholder="Add a comment..." />
        <div className="flex">
          <img src={img} alt={img} />
          <button className="uppercase">Send</button>
        </div>
      </section>
    </>
  );
};

export default Input;
