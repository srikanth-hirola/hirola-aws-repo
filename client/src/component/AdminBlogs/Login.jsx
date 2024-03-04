import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
    // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie] = useCookies(["adminBlogCookie"]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    let updatedState = { ...formData };
    updatedState[name] = value;
    setFormData(updatedState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://3.6.159.57:8000/admin/login", {
        formData,
      });

      setCookie("adminBlogCookie", data?.token);
      navigate("/admin");
      toast.success("Logged In Successfully");
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="Hirola-admin-login-page">
        <div className="admin-login-section">
          <div className="admin-login-sub">
            <div className="container">
              <div className="row align-items-start">
                <div className="col-md-6">
                  <div className="admin-login-page-content">
                    <div className="admin-login-logo-image">
                      <img
                        src="https://hirolainfotech.com/images/logo-3.svg"
                        alt="logo-admin"
                      />
                    </div>
                    <h2 className="hirola-admin-h1-tag">Welcome Back .!</h2>
                    <p>Skip the lag ?</p>
                    <hr />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="admin-login-page-form">
                    <div className="admin-login-page-circle-one"></div>
                    <div className="admin-login-page-form-section">
                      <Form
                        // onSubmit={handleSubmit}
                        name="basic"
                        labelCol={{
                          span: 8,
                        }}
                        wrapperCol={{
                          span: 16,
                        }}
                        style={{
                          maxWidth: 600,
                        }}
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Form.Item
                          
                          // name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input name="userName"
                          value={formData?.userName}
                          onChange={handleFormDataChange}
                          type="text"
                          placeholder="Enter UserName"
                          // required
                          label="Username" />
                        </Form.Item>

                        <Form.Item
                          // name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Input.Password name="password"
                          value={formData?.password}
                          onChange={handleFormDataChange}
                          type="password"
                          placeholder="Enter Password" />
                        </Form.Item>

                        {/* <Form.Item
                          name="remember"
                          valuePropName="checked"
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                        >
                          <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}
                        <button
                        className="admin-login-page-button"
                        type="submit"
                        name="sub"
                        onClick={handleSubmit}
                      >
                        Login{" "}
                      </button>
                      </Form>

                      
                      <p className="hirola-admin-forget-password">
                        <Link>Forgot Password</Link>
                      </p>
                      <div className="home-login-line-or">
                        <hr />
                        {/* <p>or</p> */}
                        <hr />
                      </div>
                    </div>
                    <div className="admin-login-page-circle-two"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login
