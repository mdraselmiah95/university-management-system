import { Button, Card } from "antd";
import PHForm from "../../../components/form/PHForm";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PHSelect from "../../../components/form/PHSelect";
import { monthsOptions } from "../../../constants/globals";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { semesterStatusOptions } from "../../../constants/semester";
import PHDatePicker from "../../../components/form/PHDataPicker";
import PHInput from "../../../components/form/PHInput";

const SemesterRegistration = () => {
  const { data: academicSemester, isLoading: academicSemesterLoading } =
    useGetAllSemestersQuery([
      {
        name: "sort",
        value: "year",
      },
    ]);

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

          <PHSelect
            label="Academic Status"
            name="status"
            placeholder="Select status"
            options={semesterStatusOptions}
          />

          <PHDatePicker
            name="startDate"
            label="Start Date"
            placeholder="Select start date"
          />

          <PHDatePicker
            name="endDate"
            label="End Date"
            placeholder="Select end date"
          />

          <PHInput
            type="text"
            name="minCredit"
            label="Min Credit"
            placeholder="Min credit"
          />

          <PHInput
            type="text"
            name="maxCredit"
            label="Max Credit"
            placeholder="Max credit"
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
