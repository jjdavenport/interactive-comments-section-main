const Wrapper = ({ children }) => {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col bg-veryLightGray font-custom">
        {children}
      </div>
    </>
  );
};

export default Wrapper;
