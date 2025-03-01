import { useEffect, useRef } from "react";

const Textarea = ({ value, onChange, placeholder, autoFocus }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    autoFocus && textareaRef.current;
    textareaRef.current.focus();
    textareaRef.current.setSelectionRange(value.length, value.length);
  }, [autoFocus, value]);

  return (
    <textarea
      ref={textareaRef}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className="h-32 w-full cursor-pointer resize-none appearance-none rounded-lg border border-lightGray px-5 py-3 text-darkBlue placeholder:text-grayishBlue focus:border-moderateBlue focus:outline-none md:h-28"
    />
  );
};

export default Textarea;
