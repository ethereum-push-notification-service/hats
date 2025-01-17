import React, { ChangeEvent, forwardRef } from "react";
import moment from "moment";
import { StyledFormInput } from "../FormInput/styles";
import { parseIsDirty } from "../utils";

type FormDateInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  colorable?: boolean;
  withTime?: boolean;
  isDirty?: boolean | boolean[];
  error?: { message: string; type: string };
  onChange: (data: number) => void;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function FormDateInputComponent(
  { value, onChange, name, colorable = false, isDirty = false, withTime = false, placeholder, error, label }: FormDateInputProps,
  ref
) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const timestampSeconds = new Date(e.target.value).getTime() / 1000;
    onChange(timestampSeconds);
  };

  const getDateFromTimestamp = (timestampSeconds: number) => {
    if (!timestampSeconds) return "";
    const date = new Date(0);
    date.setUTCSeconds(timestampSeconds);

    const momentDate = moment(date);

    if (withTime) {
      const yyyy_mm_ddThh_mm = momentDate.format("YYYY-MM-DDTHH:mm");
      return yyyy_mm_ddThh_mm;
    } else {
      const yyyy_mm_dd = momentDate.format("YYYY-MM-DD");
      return yyyy_mm_dd;
    }
  };

  return (
    <StyledFormInput isDirty={parseIsDirty(isDirty) && colorable} hasError={!!error && colorable}>
      <div className="main-container">
        {label && <label htmlFor={name}>{label}</label>}

        <input
          name={name}
          id={name}
          value={getDateFromTimestamp(value as number)}
          type={withTime ? "datetime-local" : "date"}
          placeholder={placeholder}
          ref={ref}
          onChange={handleOnChange}
        />
      </div>

      {error && <span className="error">{error.message}</span>}
    </StyledFormInput>
  );
}

export const FormDateInput = forwardRef(FormDateInputComponent);
