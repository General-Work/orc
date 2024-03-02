import React, { useContext, useState } from "react";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FormInputPassword from "../inputs/FormInputPassword";
import ForgotPasswordPage from "./forgotPassword/forgotPasswordPage";
import FormInputText from "../inputs/FormInputText";
import { LoadingContext } from "../../App";

const LoginPage = (props) => {
  const { onRegister, setAlert } = props;
  const navigate = useNavigate();
  const [ForgotPassword, setForgotPassword] = useState(false);
  const setLoading = useContext(LoadingContext);

  const Login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  };
  return (
    <>
      {!ForgotPassword ? (
        <div className=" py-10 px-10">
          <>
            <div className="flex gap-2 text-gray-700 text-xl mb-8 justify-center">
              <LockPersonIcon />
              <span className="font-semibold">Log in to your account</span>
            </div>
            <form onSubmit={Login}>
              <div className="flex flex-col gap-6">
                <FormInputText
                  label="Email"
                  name="email"
                  autoComplete="off"
                  required
                />
                <FormInputPassword
                  label="Password"
                  name="password"
                  autoComplete="off"
                  required
                />
              </div>
              <button
                onClick={(_) => setForgotPassword(true)}
                className="text-sm text-gray-500 hover:text-gray-800 flex justify-start mb-8 pt-2"
              >
                Forgot your password?
              </button>
              <div className="grid h-12">
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </div>
            </form>
            <div className="grid justify-center mt-6">
              <div className="flex gap-2 text-gray-500">
                <span>Don't have an account?</span>
                <button
                  onClick={onRegister}
                  className="text-[#1976D2] hover:text-blue-800"
                >
                  Register now
                </button>
              </div>
            </div>
          </>
        </div>
      ) : (
        <ForgotPasswordPage
          setForgotPassword={setForgotPassword}
          setAlert={setAlert}
        />
      )}
    </>
  );
};

export default LoginPage;
