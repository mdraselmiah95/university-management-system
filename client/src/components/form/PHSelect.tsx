import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  placeholder?: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
};

const PHSelect = ({
  label = "name",
  name = "name",
  placeholder = "name",
  options,
  disabled = false,
}: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          help={error?.message}
          validateStatus={error ? "error" : ""}
        >
          <Select
            style={{ width: "100%" }}
            {...field}
            placeholder={placeholder}
            allowClear
            options={options}
            size="large"
            disabled={disabled}
            status={error ? "error" : ""}
          />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
