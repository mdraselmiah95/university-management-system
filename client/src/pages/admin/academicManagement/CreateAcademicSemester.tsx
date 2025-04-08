import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 8 }, (_, i) => ({
  value: String(currentYear + i),
  label: String(currentYear + i),
}));

console.log({ yearOptions });

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data.name) - 1].label;

    const semesterData = {
      ...data,
      name,
      code: data?.name,
    };
    console.log({ semesterData });
  };

  return (
    <Flex align="center" justify="center">
      <Col span={8}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            label="Name"
            name="name"
            placeholder="Select Name"
            options={nameOptions}
          />
          <PHSelect
            label="Year"
            name="year"
            placeholder="Select Year"
            options={yearOptions}
          />
          <PHSelect
            label="Start Month"
            name="startMonth"
            placeholder="Select Start Month"
            options={nameOptions}
          />
          <PHSelect
            label="End Month"
            name="endMonth"
            placeholder="Select End Month"
            options={nameOptions}
          />
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
