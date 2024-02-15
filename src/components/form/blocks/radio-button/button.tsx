import { useEffect, useState } from "react";

type ButtonProps = {
  id: number | string;
  label: string;
  value: string;
  isActive: boolean;
  onChange: ({ value, id }: { value: string; id: number | string }) => void;
};

export const Button: React.FC<ButtonProps> = ({
  id,
  label,
  value,
  isActive,
  onChange,
}) => {
  const [isSelected, setIsSelected] = useState(isActive);

  // for removing active status whenever another button is clicked
  useEffect(() => {
    setIsSelected(isActive);
  }, [isActive]);

  const clickHandler = () => {
    onChange({ value, id });
  };

  return (
    <div
      className="cursor-pointer flex items-center gap-3 border-2 border-gary-600 rounded-md py-4 px-3"
      onClick={clickHandler}
    >
      {/* state indicator */}
      <div className={`p-1 border border-gray-300 rounded-full`}>
        <div
          className={`p-2 transition rounded-full ${
            isSelected ? "bg-blue-950" : ""
          }`}
        ></div>
      </div>
      {label}
    </div>
  );
};
