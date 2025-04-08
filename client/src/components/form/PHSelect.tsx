import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  placeholder?: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

const PHSelect = ({
  label = "name",
  name = "name",
  placeholder = "name",
  options,
}: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            {...field}
            placeholder={placeholder}
            allowClear
            options={options}
            size="large"
          />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
