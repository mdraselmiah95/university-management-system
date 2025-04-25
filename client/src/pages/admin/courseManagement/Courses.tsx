import { Button, Card } from "antd";
import PHForm from "../../../components/form/PHForm";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { semesterStatusOptions } from "../../../constants/semester";
import PHDatePicker from "../../../components/form/PHDataPicker";
import PHInput from "../../../components/form/PHInput";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement.api";

const dataC = {
  title: "Dom Manipulation",
  prefix: "JS",
  code: 108,
  credits: 3,
  isDeleted: false,
  preRequisiteCourses: [
    {
      course: "65b5ff53d6ffdd9bfc058320",
      isDeleted: false,
    },
    {
      course: "65b5ffc2d6ffdd9bfc058326",
      isDeleted: false,
    },
  ],
};

const Courses = () => {
  const { data: academicSemester, isLoading: academicSemesterLoading } =
    useGetAllSemestersQuery([
      {
        name: "sort",
        value: "year",
      },
    ]);

  const [addRegisteredSemester] = useAddRegisteredSemesterMutation();

  const academicSemestersOptions = academicSemester?.data?.map((semester) => ({
    label: `${semester.name} ${semester.year}`,
    value: semester._id,
  }));

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Semester...");

    const semesterData = {
      ...data,
      minCredit: Number(data?.minCredit),
      maxCredit: Number(data?.maxCredit),
    };

    try {
      const res = (await addRegisteredSemester(semesterData)) as TResponse<any>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
        navigate("/admin/registered-semesters");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
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

export default Courses;
