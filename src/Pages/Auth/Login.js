import { Shield } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import { UserAuth } from "./protecteRoute";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === "admin" && password === "admin") {
      UserAuth("success");
      navigate("/dashboard");
    } else setError("Incorrect email or password");
  };

  return (
    <section className="h-screen">
      <div className="container  px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="border border-gray-500 p-10 shadow-2xl rounded">
            <div className="text-center my-4">
              <Shield sx={{ fontSize: 65 }} />
            </div>
            <p className="text-red-600 font-semibold">{error}</p>
            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              {/* Password input */}
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
