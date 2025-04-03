import { Button, Card } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(
        setUser({
          user: user,
          token: res.data.accessToken,
        })
      );

      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      console.log({ err });
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
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="id" label="ID:" />
        <PHInput type="text" name="password" label="Password:" />

        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </PHForm>
    </Card>
  );
};

export default Login;
