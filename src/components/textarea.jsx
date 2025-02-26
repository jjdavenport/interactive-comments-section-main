const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <>
      <textarea
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="h-32 w-full cursor-pointer resize-none appearance-none rounded-lg border border-lightGray px-5 py-3 text-darkBlue placeholder:text-grayishBlue focus:border-moderateBlue focus:outline-none md:h-28"
      />
    </>
  );
};

export default Textarea;
