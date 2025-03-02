import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col items-center bg-veryLightGray font-custom">
        {children}
      </div>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
