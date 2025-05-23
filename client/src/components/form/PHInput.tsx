import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
};

const PHInput = ({ type, name, label, placeholder = "Name" }: TInputProps) => {
  return (
    <div
      style={{
        marginBottom: "18px",
      }}
    >
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label={label}
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <Input
              {...field}
              type={type}
              status={error ? "error" : ""}
              id={name}
              placeholder={placeholder}
              size="large"
              allowClear
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
