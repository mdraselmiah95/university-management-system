import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const PHInput = ({ type, name, label }) => {
  return (
    <div
      style={{
        marginBottom: "18px",
      }}
    >
      {label && (
        <div
          style={{
            marginBottom: "6px",
          }}
        >
          {label}
        </div>
      )}
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} type={type} id={name} placeholder={name} />
        )}
      />
    </div>
  );
};

export default PHInput;
