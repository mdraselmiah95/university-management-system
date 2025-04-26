import { Button, Card } from "antd";
import PHForm from "../../../components/form/PHForm";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import PHInput from "../../../components/form/PHInput";
import {
  useAddRegisteredSemesterMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import PHSelect from "../../../components/form/PHSelect";

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

const CreateCourse = () => {
  const [addRegisteredSemester] = useAddRegisteredSemesterMutation();

  const navigate = useNavigate();

  const { data: courseData } = useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = courseData?.data?.map((item) => ({
    value: item?._id,
    label: `${item?.title}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Semester...");

    const courseData = {
      ...data,
      isDeleted: false,
      preRequisiteCourses: data?.preRequisiteCourses?.map((item: any) => ({
        course: item,
        isDeleted: false,
      })),
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
        title="Create Course"
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
          <PHInput type="text" name="title" label="Title" placeholder="title" />

          <PHInput
            type="text"
            name="prefix"
            label="Prefix"
            placeholder="prefix"
          />

          <PHInput type="text" name="code" label="Code" placeholder="code" />
          <PHInput
            type="text"
            name="credits"
            label="Credits"
            placeholder="credits"
          />

          <PHSelect
            mode="multiple"
            name="preRequisiteCourses"
            label="Pre-Requisite Courses"
            options={preRequisiteCoursesOptions}
          />

          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </PHForm>
      </Card>
    </div>
  );
};

export default CreateCourse;
