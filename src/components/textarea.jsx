import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Textarea = ({ value, onChange, placeholder, autoFocus }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    autoFocus && textareaRef.current
      ? textareaRef.current.focus() &
        textareaRef.current.setSelectionRange(value.length, value.length)
      : null;
  }, [autoFocus, value]);

  return (
    <textarea
      ref={textareaRef}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className="h-32 w-full cursor-pointer resize-none appearance-none rounded-lg border border-lightGray px-5 py-3 text-darkBlue transition-colors duration-300 ease-in-out placeholder:text-grayishBlue hover:border-moderateBlue focus:border-moderateBlue focus:outline-none md:h-28"
    />
  );
};

Textarea.propTypes = {
  autoFocus: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
