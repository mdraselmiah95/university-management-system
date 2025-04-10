import { Form, Input } from "antd";
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
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              placeholder={name}
              size="large"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
