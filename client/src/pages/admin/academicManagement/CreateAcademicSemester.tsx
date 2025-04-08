import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="name" label="Name" />
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </PHForm>
    </div>
  );
};

export default CreateAcademicSemester;
