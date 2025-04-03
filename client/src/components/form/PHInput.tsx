import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string | number;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
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
