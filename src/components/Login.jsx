import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Login = () => {
  const [credential, setCredential] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = localStorage.getItem("todoCredentia");
    const { name, password } = credential;
    if (name == "") {
      alert("Enter your name");
    } else if (password == "") {
      alert("Enter your password");
    } else {
      if (validation) {
        const userData = JSON.parse(validation);
        if (userData.name === name && userData.password === password) {
          toast.success("Sucessfully Login..");
          navigate("/");
        } else {
          setCredential({ name: "", password: "" });
          toast.error("Invalid Credential!");
        }
      } else {
        navigate("/sign-up");
      }
    }
  };

  return (
    <div className="bg-[#172842] min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#b3c0d3] p-8 rounded shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              value={credential.name}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credential.password}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
            >
              Login
            </button>
            <p className="ml-4">
              you don't have Account?
              <Link
                className="text-indigo-700 font-bold underline"
                to={"/sign-up"}
              >
                SignUp
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
