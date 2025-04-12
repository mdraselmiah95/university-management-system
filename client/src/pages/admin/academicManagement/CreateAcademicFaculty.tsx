import { Button, Card } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../../components/form/PHInput";
import { academicFacultySchema } from "../../../sehemas/academicManagement.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CreateAcademicFaculty = () => {
  const navigate = useNavigate();
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Faculty...");

    try {
      const res = await addAcademicFaculty(data);
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
        navigate("/admin/academic-faculty");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Card
        title="Create Academic Faculty"
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
          resolver={zodResolver(academicFacultySchema)}
        >
          <PHInput name="name" type="text" label="Faculty Name" />
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </PHForm>
      </Card>
    </>
  );
};

export default CreateAcademicFaculty;
