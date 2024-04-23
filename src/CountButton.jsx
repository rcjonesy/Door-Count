import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export const CountButton = ({ type, setCount, locked }) => {
  const handleCLick = (event) => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 50) {
          return 50;
        }
        return newCount;
      }
    });
    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleCLick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};
