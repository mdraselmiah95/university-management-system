import { useNavigate } from "react-router-dom";
import { useAddAcademicDepartmentMutation } from "../../../redux/features/admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Card } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import PHInput from "../../../components/form/PHInput";

const CreateAcademicDepartment = () => {
  const navigate = useNavigate();
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
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
          // resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            label="Department Name"
            name="name"
            placeholder="add department name"
            options={semesterOptions}
          />

          <PHInput name="name" type="text" label="Faculty Name" />
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </PHForm>
      </Card>
    </>
  );
};

export default CreateAcademicDepartment;
