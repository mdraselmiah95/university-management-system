import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

const PHSelect = ({ label = "name", name = "name" }) => {
  return (
    <Controller
      name={name}
      render={() => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            placeholder="select it"
            allowClear
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
