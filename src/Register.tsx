import React, { useState } from "react";
import type { RegisterData } from "./Types/types";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // handle register
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //  prevent refresh

    if (!data.name || !data.email || !data.password) {
      alert("Please fill all fields");
      return;
    }

    //  get existing users
    const existingUsers = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    //  check if email already exists
    const userExists = existingUsers.find(
      (user: RegisterData) => user.email === data.email
    );

    if (userExists) {
      alert("User already exists!");
      return;
    }

    // save new user
    const updatedUsers = [...existingUsers, data];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registration successful!");

    // redirect to login
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={data.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={data.password}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded"
        >
          Register
        </button>

        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;