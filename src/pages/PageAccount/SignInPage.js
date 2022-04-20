import { useAuth } from "../../contexts/auth-context";
import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import { useForm } from "react-hook-form";
import { Field } from "../../Components/field";
import { Label } from "../../Components/label";
import { Input } from "../../Components/input";
import { Button } from "../../Components/button";
import { IconEyeClose } from "../../Components/icon/IconEyeClose";
import { IconEyeOpen } from "../../Components/icon/IconEyeOpen";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-app/firebase-config";
import { NavLink } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your passrod must be at least 8 characters or greater"),
});
const SignInPage = () => {
  const history = useHistory();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Đăng nhập thành công");
        history.push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        toast.error("Sai email hoặc password");
      });
  };
  const [togglePassword, setTogglePassword] = useState(false);
  // useEffect(() => {
  //   if (userInfo?.email) history.push("/");
  // }, [history, userInfo?.email]);
  // //  }, [ userInfo?.email]);
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message);
    }
  }, [errors]);
  return (
    <AuthenticationPage page="Đăng nhập">
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email">Địa chỉ email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Nhập địa chỉ email của bạn"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Mật khẩu</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Nhập mật khẩu của bạn"
            control={control}
          >
            {togglePassword ? (
              <IconEyeOpen
                onClick={() => setTogglePassword(false)}
              ></IconEyeOpen>
            ) : (
              <IconEyeClose
                onClick={() => setTogglePassword(true)}
              ></IconEyeClose>
            )}
          </Input>
        </Field>
        <div className="have-account">
          Bạn chưa có tài khoản? <NavLink to={"/signup"}>Đăng ký</NavLink>
        </div>
        <Button
          type="submit"
          style={{
            maxWidth: "300px",
            margin: "0 auto",
          }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Đăng nhập
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
