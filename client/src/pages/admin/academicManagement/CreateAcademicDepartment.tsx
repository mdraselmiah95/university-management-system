import { useNavigate } from "react-router-dom";
import {
  useAddAcademicDepartmentMutation,
  useGetAcademicFacultiesQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Card } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicDepartmentSchema } from "../../../sehemas/academicManagement.schema";
import { toast } from "sonner";
import { TResponse } from "../../../types";

const CreateAcademicDepartment = () => {
  const navigate = useNavigate();
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const { data: FacultyData } = useGetAcademicFacultiesQuery(undefined);

  const facultyOption = FacultyData?.data?.map((faculty) => {
    return {
      label: faculty.name,
      value: faculty._id,
    };
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Student...");

    try {
      const res = (await addAcademicDepartment(data)) as TResponse;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
        navigate("/admin/academic-department");
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <>
      <Card
        title="Create Academic Semester"
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
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <PHSelect
            label="Select Faculty"
            name="academicFaculty"
            placeholder="Select Faculty"
            options={facultyOption ?? []}
          />

          <PHInput name="name" type="text" label="Department Name" />
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </PHForm>
      </Card>
    </>
  );
};

export default CreateAcademicDepartment;
