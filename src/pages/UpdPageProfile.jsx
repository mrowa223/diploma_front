import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UpdPage = () => {
  const [formData, setFormData] = useState({
    firstName: "Daniel",
    lastName: "Adams",
    email: "daniel.adams@example.com",
    phone: "+7 (805) 348 95 72",
    newPassword: "",
    confirmPassword: "",
    subscribe: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      // Simulated fetched JSON data
      const json = {
        buyer: {
          name: "John",
          surname: "Doe"
        },
        username: "john.doe@example.com"
      };

      setFormData({
        firstName: json.buyer.name || "",
        lastName: json.buyer.surname || "",
        email: json.username || "",
        phone: "",
        newPassword: "",
        confirmPassword: "",
        subscribe: true,
      });
    };

    fetchData();
  }, []);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const lengthRegex = /^.{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!lengthRegex.test(formData.firstName)) {
      newErrors.firstName = "First name must be at least 3 characters long.";
    }

    if (!lengthRegex.test(formData.lastName)) {
      newErrors.lastName = "Last name must be at least 3 characters long.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const message = `
        First Name: ${formData.firstName}\n
        Last Name: ${formData.lastName}\n
        Email: ${formData.email}\n
        Phone: ${formData.phone}\n
        Subscribe: ${formData.subscribe ? "Yes" : "No"}
      `;
      alert(message);
      // Updating state to force re-render
      setFormData({ ...formData });
    } else {
      setErrors(validationErrors);
    }

  };

// enable server
  // const handleSubmit = () => {
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length === 0) {
  //     // Отправка на сервер Изменение профиля
  //    const response = await fetch(http://localhost:8080/api/private/buyer/change/,  {
  //         method: "GET",
  //         // mode: "cors",
  //         headers: {
  //           "Authorization": token_,
  //           "Content-Type": "application/json",
  //         },
  //        body: {
  //         "id": 0,
  //         "name": ${formData.firstName},
  //          ....
  //       }
  //       });
  //    //
  //     setFormData({ ...formData });
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };

  
  return (
    <div>
      <style>
        {`body{
    background:#eee;    
}
.widget-author {
  margin-bottom: 58px;
}
.author-card {
  position: relative;
  padding-bottom: 48px;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
}
.author-card .author-card-cover {
  position: relative;
  width: 100%;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.author-card .author-card-cover::after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  opacity: 0.5;
}
.author-card .author-card-cover > .btn {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0 10px;
}
.author-card .author-card-profile {
  display: table;
  position: relative;
  margin-top: -22px;
  padding-right: 15px;
  padding-bottom: 16px;
  padding-left: 20px;
  z-index: 5;
}
.author-card .author-card-profile .author-card-avatar, .author-card .author-card-profile .author-card-details {
  display: table-cell;
  vertical-align: middle;
}
.author-card .author-card-profile .author-card-avatar {
  width: 85px;
  border-radius: 50%;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, .15);
  overflow: hidden;
}
.author-card .author-card-profile .author-card-avatar > img {
  display: block;
  width: 100%;
}
.author-card .author-card-profile .author-card-details {
  padding-top: 20px;
  padding-left: 15px;
}
.author-card .author-card-profile .author-card-name {
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: bold;
}
.author-card .author-card-profile .author-card-position {
  display: block;
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 600;
}
.author-card .author-card-info {
  margin-bottom: 0;
  padding: 0 25px;
  font-size: 13px;
}
.author-card .author-card-social-bar-wrap {
  position: absolute;
  bottom: -18px;
  left: 0;
  width: 100%;
}
.author-card .author-card-social-bar-wrap .author-card-social-bar {
  display: table;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .11);
}
.btn-style-1.btn-white {
    background-color: #fff;
}
.list-group-item i {
    display: inline-block;
    margin-top: -1px;
    margin-right: 8px;
    font-size: 1.2em;
    vertical-align: middle;
}
.mr-1, .mx-1 {
    margin-right: .25rem !important;
}

.list-group-item.active:not(.disabled) {
    border-color: #e7e7e7;
    background: #fff;
    color: #ac32e4;
    cursor: default;
    pointer-events: none;
}
.list-group-flush:last-child .list-group-item:last-child {
    border-bottom: 0;
}

.list-group-flush .list-group-item {
    border-right: 0 !important;
    border-left: 0 !important;
}

.list-group-flush .list-group-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
}
.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}
.list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: .25rem;
}
a.list-group-item, .list-group-item-action {
    color: #404040;
    font-weight: 600;
}
.list-group-item {
    padding-top: 16px;
    padding-bottom: 16px;
    -webkit-transition: all .3s;
    transition: all .3s;
    border: 1px solid #e7e7e7 !important;
    border-radius: 0 !important;
    color: #404040;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .08em;
    text-transform: uppercase;
    text-decoration: none;
}
.list-group-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.125);
}
.list-group-item.active:not(.disabled)::before {
    background-color: #ac32e4;
}

.list-group-item::before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: transparent;
    content: '';}

    .no-underline {
      text-decoration: none;
  }
  a{
    color: black;
    text-decoration: none;
  }
}`}
      </style>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 pb-5">
            {/* <!-- Account Sidebar--> */}
            <div className="author-card pb-3">
              <div
                className="author-card-cover"
                // style="background-image: url(https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg);"
              >
                <a
                  className="btn btn-style-1 btn-white btn-sm"
                  href="#"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="You currently have 290 Reward points to spend"
                >
                  <i className="fa fa-award text-md"></i>&nbsp;290 points
                </a>
              </div>
              <div className="author-card-profile">
                <div className="author-card-avatar">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="Daniel Adams"
                  />
                </div>
                <div className="author-card-details">
                  <h5 className="author-card-name text-lg">
                    {formData.firstName}
                  </h5>
                  <span className="author-card-position">
                    Joined February 06, 2017
                  </span>
                </div>
              </div>
            </div>
            <div className="wizard">
              <nav className="list-group list-group-flush">
                <Link to="/orders-list" className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="fe-icon-shopping-bag mr-1 text-muted"></i>
                      <div className=" no-underline d-inline-block font-weight-medium text-uppercase ">
                        Orders List
                      </div>
                    </div>
                    <span className="badge badge-secondary">6</span>
                  </div>
                </Link>
                <a className="list-group-item active" href="#">
                  <i className="fe-icon-user text-muted"></i>Profile Settings
                </a>
              </nav>
            </div>
          </div>
          {/* <!-- Profile Settings--> */}
          <div className="col-lg-8 pb-5">
            <form className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-fn">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="account-fn"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required=""
                  />
                  {errors.firstName && (
                    <div className="text-danger">{errors.firstName}</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-ln">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="account-ln"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required=""
                  />
                  {errors.lastName && (
                    <div className="text-danger">{errors.lastName}</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-email">E-mail Address</label>
                  <input
                    className="form-control"
                    type="email"
                    id="account-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled=""
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-email">E-mail Address</label>
                  <input
                    className="form-control"
                    type="email"
                    id="account-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled=""
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-pass">Phone Number</label>
                  <input
                    className="form-control"
                    type="password"
                    id="account-pass"
                    name="newPassword"
                    value={formData.newPassword}
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-confirm-pass">Confirm Phone number</label>
                  <input
                    className="form-control"
                    type="password"
                    id="account-confirm-pass"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-pass">New Password</label>
                  <input
                    className="form-control"
                    type="password"
                    id="account-pass"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="account-confirm-pass">Confirm Password</label>
                  <input
                    className="form-control"
                    type="password"
                    id="account-confirm-pass"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <hr className="mt-2 mb-3" />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="custom-control custom-checkbox d-block">
                    <input
                      className="custom-control-input"
                      type="checkbox"
                      id="subscribe_me"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="subscribe_me"
                    >
                      Subscribe me to Newsletter
                    </label>
                  </div>
                  <button
                    className="btn btn-style-1 btn-primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdPage;
