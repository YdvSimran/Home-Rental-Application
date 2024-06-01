import React, { useState, useEffect } from "react";
import "../style/Register.scss";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    profileimage: null,
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileimage") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form">
          <input
            placeholder="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Confirm the Password"
            name="confirmpassword"
            type="password"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
          />
          <input
            id="image"
            type="file"
            name="profileimage"
            accept="image/*"
            onChange={handleChange}
            required
            style={{ display: "none" }}
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile picture" />
            <p>Upload Your Photos</p>
          </label>
          {formData.profileimage && (
            <img
              src={URL.createObjectURL(formData.profileimage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          )}
          <button type="submit">REGISTER</button>
        </form>
        <a href="/login"> Already have an account? Log In Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;
