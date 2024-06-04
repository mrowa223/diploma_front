import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../commons";
import { Link } from "react-router-dom";
import api from "../apis/api";
import { registerUser } from "../apis/authApi"; // Import the registerUser function from authApi
import { useAsync } from "react-router-dom";
import { useAsyncError } from "../commons";

const Test = () => {
  throw new Error('I crashed!');
}

function foo() {

  throw new Error('I crashed!');
}

const Register = () => {
  const [formData, setFormData] = useState({
    email: "Tunaxx@gmail.com",
    name: "asd",
    password: "asd",
  });
  const throwAsyncError = useAsyncError();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      foo();
      // Call the registerUser function with the form data
      //const registrationResponse = await registerUser(formData);
      const response = await api("/users", {
        method: "GET",
      });
      console.log("Registration response:", response[0]);

      setFormData({
        name: "Test",
        email: response[0].mail == null ? "" : response[0].mail,
        password: "Test2024!",
      });
    } catch (error) {
      throwAsyncError(error);
    }
  };

  // useEffect(() => {}, formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>

      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="my-3">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
