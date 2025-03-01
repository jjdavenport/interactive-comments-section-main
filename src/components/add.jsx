import Textarea from "./textarea";
import BlueButton from "./blue-button";

const Add = ({ img, desktop, onSubmit, text, value, onChange, autoFocus }) => {
  if (desktop) {
    return (
      <>
        <form
          onSubmit={onSubmit}
          noValidate
          className="flex items-start gap-4 rounded-lg bg-white p-4 md:p-6"
        >
          <img className="w-10 object-contain" src={img} />
          <Textarea
            autoFocus={autoFocus}
            value={value}
            onChange={onChange}
            placeholder="Add a comment…"
          />
          <BlueButton text={text} />
        </form>
      </>
    );
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        noValidate
        className="flex flex-col gap-4 rounded-lg bg-white p-4"
      >
        <Textarea
          autoFocus={autoFocus}
          value={value}
          onChange={onChange}
          className="h-24 w-full resize-none appearance-none rounded-lg border border-lightGray px-5 py-3 focus:outline-none"
          placeholder="Add a comment…"
        />
        <div className="flex justify-between">
          <img className="w-8 object-contain" src={img} />
          <BlueButton text={text} />
        </div>
      </form>
    </>
  );
};

export default Add;
