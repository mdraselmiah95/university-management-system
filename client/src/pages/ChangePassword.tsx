import { Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PHInput from "../components/form/PHInput";
import PHForm from "../components/form/PHForm";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";
import { toast } from "sonner";
import { logout } from "../redux/features/auth/authSlice";

const ChangePassword = () => {
  const toastId = toast.loading("Changing Password...");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultValues = {
    oldPassword: "student01",
  };

  const [changePassword] = useChangePasswordMutation();

  const onSubmit = async (data) => {
    try {
      const res = await changePassword(data).unwrap();
      if (res?.data?.success) {
        dispatch(logout());
        toast.success("Password changed successfully", {
          id: toastId,
          duration: 2000,
        });
        navigate("/login");
      }
    } catch (err) {
      toast.error(`Something went wrong ${err}`, {
        id: toastId,
        duration: 2000,
      });
    }
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
          Change Password
        </Button>
      </PHForm>
    </Card>
  );
};

export default ChangePassword;
