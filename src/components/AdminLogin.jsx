import React from "react";
import { useForm } from "react-hook-form";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90dvh]">
      <div className=" border">
        <h2 className="text-center">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button type="submit" className="text-center">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
