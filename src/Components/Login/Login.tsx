import React, { useEffect, useState } from "react";
import ClayLayout from "@clayui/layout";
import { Heading } from "@clayui/core";
import ClayButton from "@clayui/button";
import "@clayui/css/lib/css/atlas.css";
import ClayForm, { ClayInput } from "@clayui/form";

import styles from "./Login.module.scss";
import { useHistory } from "react-router-dom";
const Login: React.FC = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    const token = localStorage.getItem("okta-token-storage");
    if (token !== null) {
      if (token.length !== 2) {
        console.log(token.length);
        history.push("/dashboard");
      }
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push("/login");
    // Handle form submission logic here (e.g., validation and API request)
  };
  const handleEmail = (e: any) => {
    console.log(e);
  };
  return (
    <ClayLayout.Sheet className={styles.outBox}>
      <ClayLayout.Row justify="center" className={styles.outBoxInner}>
        <ClayLayout.Col size={6} className={styles.outBoxInnerleftBox}>
          <ClayLayout.Row>
            <div className="aspect-ratio aspect-ratio-8-to-3">
              <img alt="thumbnail" className="" src="/LoginArrow.png" />
            </div>
          </ClayLayout.Row>
          <ClayLayout.Row>
            {" "}
            <div className="aspect-ratio aspect-ratio-8-to-3">
              <img alt="thumbnail" className="" src="/LoginPerson.png" />
            </div>
          </ClayLayout.Row>
          <ClayLayout.Row className={styles.outBoxInnerleftBoxLast}>
            <img
              alt="thumbnail"
              className={styles.outBoxInnerleftBoxLastButtonImage}
              src="/LoginLanguage.png"
            />
          </ClayLayout.Row>
        </ClayLayout.Col>
        <ClayLayout.Col size={6} className={styles.outBoxInnerrightBox}>
          <div className={styles.outBoxInnerrightBoxInner}>
            <Heading level={1} weight="semi-bold">
              Login
            </Heading>

            <ClayForm onSubmit={handleSubmit}>
              <ClayForm.Group>
                <label>Email</label>
                <ClayInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </ClayForm.Group>
              <ClayForm.Group>
                <label>Password</label>
                <ClayInput
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </ClayForm.Group>
              <div className={styles.outBoxInnerrightBoxInnerForgotPassword}>
                <a
                  href="/forgot-password"
                  className={styles.outBoxInnerrightBoxInnerForgotPasswordLink}
                >
                  Forgot Password
                </a>
              </div>
              <ClayButton
                type="submit"
                displayType="primary"
                className={styles.outBoxInnerrightBoxInnerLast}
              >
                Login
              </ClayButton>
            </ClayForm>
          </div>
        </ClayLayout.Col>
      </ClayLayout.Row>
    </ClayLayout.Sheet>
  );
};

export default Login;
