import { Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PHInput from "../components/form/PHInput";
import PHForm from "../components/form/PHForm";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultValues = {
    oldPassword: "student01",
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Card
      style={{ width: "400px", margin: "auto", marginTop: "5%" }}
      title="Login"
    >
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="oldPassword" label="Old Password:" />
        <PHInput type="text" name="newPassword" label="New Password:" />

        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </PHForm>
    </Card>
  );
};

export default ChangePassword;
