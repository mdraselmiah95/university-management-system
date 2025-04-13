import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

const PHDatePicker = ({
  name,
  label,
  placeholder = "Name",
}: TDatePickerProps) => {
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
            <DatePicker
              {...field}
              status={error ? "error" : ""}
              id={name}
              placeholder={placeholder}
              size="large"
              allowClear
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
