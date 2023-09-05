
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(formData);
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-start">
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
        <Link to="/" className="text-2xl font-bold">BrainBox</Link>
        <h1 className="text-base lg:text-2xl heading">
          Sign Up to Create An Account
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-7 grid place-items-center mx-auto overflow-hidden w-[60%] gap-4"
        >
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="py-2 rounded-sm px-3 w-full border-2 outline-none"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="py-2 rounded-sm px-3 w-full border-2 outline-none"
            />
          </div>
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Create Account
            </button>
          </div>
          <p className="heading text-center">
            Don't have an account? <br />
            <Link
              to="/register"
              className="text-[#187B99] ml-2 font-bold heading"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      <div className="relative w-1/2 h-full hidden lg:flex">
        <img
          src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnQlMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Signup image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
