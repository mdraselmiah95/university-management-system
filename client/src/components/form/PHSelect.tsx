import { Form, Select } from "antd";

const PHSelect = ({ label = "name" }) => {
  return (
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
  );
};

export default PHSelect;
