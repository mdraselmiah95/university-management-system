import { Button, Card } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../../components/form/PHInput";
import { academicFacultySchema } from "../../../sehemas/academicManagement.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateAcademicFaculty = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log({ data });
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
