import { Button, Card } from "antd";
import PHForm from "../../../components/form/PHForm";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PHSelect from "../../../components/form/PHSelect";
import { monthsOptions } from "../../../constants/globals";
import { use } from "react";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const SemesterRegistration = () => {
  const { data: academicSemester, isLoading: academicSemesterLoading } =
    useGetAllSemestersQuery(undefined);

  const academicSemestersOptions = academicSemester?.data?.map((semester) => ({
    label: `${semester.name} ${semester.year}`,
    value: semester._id,
  }));

  const navigate = useNavigate();

  console.log({ academicSemester, academicSemestersOptions });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Semester...");

    const semesterData = {
      academicSemester: "65b0104110b74fcbd7a25d92",
      status: "UPCOMING",
      startDate: "2025-01-10T04:00:01Z",
      endDate: "2025-04-24T17:59:59Z",
      minCredit: 6,
      maxCredit: 16,
    };

    console.log({ semesterData });

    // try {
    //   const res = (await addAcademicSemester(semesterData)) as TResponse;
    //   if (res?.error) {
    //     toast.error(res?.error?.data?.message, { id: toastId });
    //   } else {
    //     toast.success(res?.data?.message, { id: toastId });
    //     navigate("/admin/academic-semester");
    //   }
    // } catch (error) {
    //   toast.error("Something went wrong");
    // }
  };
  return (
    <div>
      <Card
        title="Semester Registration"
        style={{
          width: "auto",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "5%",
          padding: "12px 18px",
        }}
      >
        <PHForm
          onSubmit={onSubmit}
          // resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            label="Academic Semester"
            name="academicSemester"
            placeholder="Select academic semester"
            disabled={academicSemesterLoading}
            options={academicSemestersOptions}
          />
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </PHForm>
      </Card>
    </div>
  );
};

export default SemesterRegistration;
