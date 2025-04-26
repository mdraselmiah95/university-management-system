import { Button, Card } from "antd";
import PHForm from "../../../components/form/PHForm";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import PHInput from "../../../components/form/PHInput";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import PHSelect from "../../../components/form/PHSelect";

const CreateCourse = () => {
  const [addCourse] = useAddCourseMutation();

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
      code: Number(data?.code),
      credits: Number(data?.credits),
      isDeleted: false,
      preRequisiteCourses: data?.preRequisiteCourses?.map((item: any) => ({
        course: item,
        isDeleted: false,
      })),
    };

    console.log({ courseData });

    try {
      const res = (await addCourse(courseData)) as TResponse<any>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
        navigate("/admin/courses");
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
