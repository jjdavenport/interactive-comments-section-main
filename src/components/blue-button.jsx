const BlueButton = ({ text, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type="submit"
        className="rounded-lg bg-moderateBlue px-7 py-[0.625rem] uppercase text-white caret-moderateBlue transition-opacity duration-300 ease-in-out hover:opacity-50"
      >
        {text}
      </button>
    </>
  );
};

export default BlueButton;
