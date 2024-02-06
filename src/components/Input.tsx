import React from "react";

const Input = ({
  label,
  value,
  setValue,
  type,
}: {
  label: string;
  value: string;
  setValue: (value: any) => void;
  type: string;
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let value = e.target.value;
    setValue(value);
  };

  return (
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1">{label}</label>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        className="block border border-grey p-2 rounded-sm w-full"
      />
    </div>
  );
};

export default Input;
