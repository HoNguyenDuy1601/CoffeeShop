import React, { useState, useEffect } from "react";
import { Field } from "../../Components/field";
import { Label } from "../../Components/label";
import { Input } from "../../Components/input";
import { useForm } from "react-hook-form";
import { IconEyeClose } from "../../Components/icon/IconEyeClose";
import { IconEyeOpen } from "../../Components/icon/IconEyeOpen";
import { Button } from "../../Components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase-app/firebase-config";
import { useHistory } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import AuthenticationPage from "./AuthenticationPage";
import { NavLink } from "react-router-dom";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your passrod must be at least 8 characters or greater"),
});

const SignUpPage = () => {
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    // watch,
    // reset,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const handleSignUp = async (values) => {
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    const colRef = collection(db, "user");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      cart: [],
    });
    toast.success("Đăng kí thành công");
    history.push("/");
  };
  const [togglePassword, setTogglePassword] = useState(false);
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message);
    }
  }, [errors]);
  return (
    <AuthenticationPage page="Đăng ký">
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="fullname" className="label">
            Họ và tên
          </Label>
          <Input
            name="fullname"
            type="text"
            placeholder="Nhập họ và tên của bạn"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="fullname" className="label">
            Địa chỉ email
          </Label>
          <Input
            name="email"
            type="email"
            placeholder="Nhập địa chỉ email của bạn"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="fullname" className="label">
            Mật khẩu
          </Label>
          <Input
            name="password"
            type={togglePassword ? "text" : "password"}
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
          Bạn đã có sẵn tài khoản? <NavLink to={"/signin"}>Đăng nhập</NavLink>
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
          Đăng ký
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
