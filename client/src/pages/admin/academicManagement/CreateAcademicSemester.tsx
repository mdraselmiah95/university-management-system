import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Card } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions, yearOptions } from "../../../constants/semester";
import { monthsOptions } from "../../../constants/globals";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../sehemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Semester...");

    const name = semesterOptions[Number(data.name) - 1]?.label;

    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };

    try {
      const res = await addAcademicSemester(semesterData);
      console.log({ res });
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Card
        title="Create Academic Semester"
        style={{
          width: "400px",
          margin: "auto",
          marginTop: "5%",
          padding: "12px 18px",
        }}
      >
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
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
