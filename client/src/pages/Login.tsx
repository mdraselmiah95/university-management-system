import { Button } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     id: "A-0001",
  //     password: "admin123",
  //   },
  // });

  const { register } = useFormContext();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log({ data });
    // const toastId = toast.loading("Logging in");
    // try {
    //   const userInfo = {
    //     id: data.id,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;

    //   dispatch(
    //     setUser({
    //       user: user,
    //       token: res.data.accessToken,
    //     })
    //   );

    //   toast.success("Logged in", { id: toastId, duration: 2000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (err) {
    //   console.log({ err });
    //   toast.error(`Something went wrong ${err}`, {
    //     id: toastId,
    //     duration: 2000,
    //   });
    // }
  };

  return (
    <div>
      <PHForm onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" {...register("id")} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register("password")} />
        </div>

        <Button htmlType="submit">Login</Button>
      </PHForm>
    </div>
  );
};

export default Login;
