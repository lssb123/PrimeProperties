import axios from "axios";
import cookies from "js-cookies";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewNav from "../NewNav";
export default function Login({ onSignupClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = {
      email: email,
      password: password,
    };
    console.log(formdata);
    axios({
      url: "http://172.16.102.40:3001/User/login",
      method: "post",
      data: formdata,
    })
      .then((res) => {
        console.log(res.data)
        if (res.data.message === "Login Successfull") {
          console.log(res.data.Token);
          localStorage.setItem("email", res.data.userEmail);
          cookies.setItem("token", res.data.Token);
          navigate("/newnav");
        } else {
          alert("Enter Valid Details");
        }
      })
      .catch((err) => alert("Enter Valid Details"));
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        className="space-y-9"
        action="#"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to your account
        </h5>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            aria-label="Email address"
            aria-required="true"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            aria-label="Password"
            aria-required="true"
            placeholder="Enter your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-black bg-gray-500 hover:bg-gray-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={<NewNav />}
        >
          Sign In
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Don’t have an account?{" "}
          <button
            onClick={onSignupClick}
            className="text-blue-700 hover:underline hover:text-red-700 dark:text-blue-500"
          >
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
}
