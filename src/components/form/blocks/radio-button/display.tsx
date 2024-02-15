import { Button } from "./button.tsx";
import { useEffect, useState } from "react";

type Choice = {
  label: string;
  value: string;
};

type RadioButtonDisplayProps = {
  attributes: {
    choices: Choice[];
    required: boolean;
  };
  setIsAnswered: (value: boolean) => void;
  setVal: (value: string) => void;
  setIsValid: (value: boolean) => void;
  setValidationErr: (value: string | null) => void;
};

export const RadioButtonDisplay: React.FC<RadioButtonDisplayProps> = ({
  attributes,
  setIsAnswered,
  setVal,
  setIsValid,
  setValidationErr,
}) => {
  const { choices, required } = attributes;
  const [activeButton, setActiveButton] = useState<number | string | null>(
    null,
  );

  useEffect(() => {
    if (required) {
      setIsAnswered(false);
      setIsValid(false);

      setValidationErr("The answer is required");
    }
  }, [required]);

  const changeHandler = ({
    value,
    id,
  }: {
    value: string;
    id: string | number;
  }) => {
    setActiveButton(id);
    setIsAnswered(true);
    setVal(value);
    setIsValid(true);
    setValidationErr(null);
  };

  return (
    <div className="flex flex-col gap-2">
      {choices.map(({ value, label }, index) => {
        return (
          <Button
            id={index}
            label={label}
            value={value}
            onChange={changeHandler}
            isActive={index === activeButton}
          />
        );
      })}
    </div>
  );
};
