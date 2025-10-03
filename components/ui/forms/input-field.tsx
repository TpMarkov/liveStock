import React from "react";
import { Label } from "../label";
import { Input } from "../input";
import { cn } from "@/lib/utils";

const InputField = ({
  name,
  label,
  type = "text",
  disabled,
  value,
  validation,
  register,
  error,
  placeholder,
}: FormInputProps) => {
  return (
    <div className="space-y-2 gap-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        {...register(name, validation)}
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={cn("form-input", {
          "opacity-50 cursor-not-allowed": disabled,
        })}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
