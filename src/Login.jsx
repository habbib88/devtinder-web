import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-[#f0f8ff] w-96 shadow-sm">
        {" "}
        {/* Custom background color */}
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <legend className="fieldset-legend">Email ID</legend>
            <input type="text" className="input" placeholder="Type here" />
          </div>
          <div>
            <legend className="fieldset-legend">Password</legend>
            <input type="text" className="input" placeholder="Type here" />
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary-900">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
