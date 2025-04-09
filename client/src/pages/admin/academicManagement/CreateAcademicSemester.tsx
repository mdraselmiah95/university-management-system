import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Card } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions, yearOptions } from "../../../constants/semester";
import { monthsOptions } from "../../../constants/globals";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterOptions[Number(data.name) - 1]?.label;

    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };
    console.log({ semesterData });
  };

  return (
    <>
      <Card
        title="Create Academic Semester"
        style={{
          width: "400px",
          margin: "auto",
          marginTop: "5%",
          padding: "12px",
        }}
      >
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            label="Name"
            name="name"
            placeholder="Select Name"
            options={semesterOptions}
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
            options={monthsOptions}
          />
          <PHSelect
            label="End Month"
            name="endMonth"
            placeholder="Select End Month"
            options={monthsOptions}
          />
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </PHForm>
      </Card>
    </>
  );
};

export default CreateAcademicSemester;
