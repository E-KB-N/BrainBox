import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-start">
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
        <Link to="/" className="text-2xl font-bold">BrainBox</Link>
        <form
          onSubmit={handleSubmit}
          className="mt-7 grid place-items-center mx-auto overflow-hidden w-[60%] gap-4"
        >
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="py-2 rounded-sm px-8 w-full border-2 outline-none"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="py-2 rounded-sm px-8 w-full border-2 outline-none"
            />
          </div>
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
              className="py-2 rounded-sm px-8 w-full border-2 outline-none"
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
              className="py-2 rounded-sm px-8 w-full border-2 outline-none"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="py-2 rounded-sm px-8 w-full border-2 outline-none"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="agreeTerms"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the Terms and Conditions
              </label>
            </div>
          </div>
          <div className="mb-4 text-center">
            <button
              type="submit"
              disabled={!formData.agreeTerms}
              className="px-4 py-2 bg-indigo-600 w-full cursor-pointer text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="relative w-1/2 h-full hidden lg:flex">
        <img
          src="https://plus.unsplash.com/premium_photo-1681494184591-c73695b8f4d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWRlbnQlMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Signup image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
