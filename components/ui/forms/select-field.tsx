import React from "react";
import { Label } from "../label";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectField = ({
  name,
  label,
  placeholder,
  options,
  control,
  error,
  required = false,
}: SelectFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>

      <Controller
        name={name}
        rules={{
          required: required
            ? `Please select ${label.toLocaleLowerCase()}`
            : false,
        }}
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600 text-white">
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem
                    value={option.value}
                    key={option.value}
                    className="focus:bg-gray-600 focus:text-whtie"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </Select>
        )}
      />
    </div>
  );
};

export default SelectField;
