import { Title } from "./Title";
import { Count } from "./Count";
import { ResetButton } from "./ResetButton";
import { ButtonContainer } from "./CountButtons";
import { useState, useEffect } from "react";
import { CountButton } from "./CountButton";


export const Card = () => {
  const [count, setCount] = useState(0);
  const locked = count === 50 ? true : false;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 50) {
          setCount(50);
          return;
        }
        setCount(newCount);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
};
