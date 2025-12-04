import React, { useState } from "react";
import { useNavigate } from "react-router";
import supabase from "../Utils/supabase";
// import supabase from "../../../Utils/SupaBase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    signUpNewUser(email, password);
  };

  const signUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: { emailRedirectTo: "https://react-e-commerce-project-sa.vercel.app/" },
    });
    if (error) {
      alert(error.message);
      console.log("error signing up", error);
      return;
    }
    if (data) {
      alert("Check your email to confirm your account!");
      console.log("success signin up", data);
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-120"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Register Pgae</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter full name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter admin email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter password"
            required
          />
        </div>

        <p>
          Already have account?
          <span
            onClick={() => navigate("/login")}
            className="text-red-600 cursor-pointer"
          >
            Login
          </span>
        </p>

        <button
          type="submit"
          className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-md font-medium hover:bg-blue-700 duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
