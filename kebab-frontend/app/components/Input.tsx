import React from "react";

interface IInput {
  inputType?: "input" | "textarea";
  label?: string;
  rows?: number;
}

const Input = ({ inputType = "input", label, rows }: IInput) => {
  return (
    <div className="w-full">
      {inputType == "textarea" && (
        <label className="text-white font-frankfurter text-base">{label}</label>
      )}

      {inputType == "input" ? (
        <input
          className="w-full outline-0 placeholder:text-white font-frankfurter text-white border-b-2 border-b-white"
          placeholder={label}
        />
      ) : (
        <textarea
          rows={rows}
          className="outline-0 rounded-lg p-3 text-white font-frankfurter w-full border-2 border-white appearance-none"
        ></textarea>
      )}
    </div>
  );
};

export default Input;
