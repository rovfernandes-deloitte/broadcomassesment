import React, { useState } from "react";
import { ClayVerticalNav } from "@clayui/nav";
import ClayLayout from "@clayui/layout";
import styles from "./Project.module.scss";
import SideBar from "../SideBar/SideBar";
import ClayButton, { ClayButtonWithIcon } from "@clayui/button";
import ClayIcon from "@clayui/icon";
import { ClayDropDownWithItems } from "@clayui/drop-down";
import ClayUpperToolbar from "@clayui/upper-toolbar";
import ClayForm, { ClayInput } from "@clayui/form";
import ClaySticker from "@clayui/sticker";
import { Button, Heading } from "@clayui/core";
import DropDown from "@clayui/drop-down/lib/DropDown";
import ClayDatePicker from "@clayui/date-picker";
import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import NavBar from "../NavBar/NavBar";
const spritemap = "/icons.svg";

const Project: React.FC = () => {
  const name = localStorage.getItem("name");
  const formik = useFormikContext();
  const [dateValue1, setDateValue1] = useState("");
  const [datevalue2, setDateValue2] = useState("");
  const [values, setValues] = useState({ name: "", owner: "" });
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
  });
  return (
    <ClayLayout.Sheet className={styles.outBox}>
      <ClayLayout.Row justify="start" className={styles.outBoxInner}>
        <SideBar />
        <ClayLayout.Col size={10} className={styles.outBoxInnerRightBox}>
          <ClayLayout.Row>
            <ClayLayout.Col size={12} className={styles.outBoxInnerRightBox}>
              <NavBar />
            </ClayLayout.Col>

            <ClayLayout.Col
              size={12}
              className={styles.outBoxInnerrightBoxWelcome}
            >
              <Heading level={1} weight="semi-bold">
                Create Project
              </Heading>
            </ClayLayout.Col>
            <Formik
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission here
                console.log("Form submitted with values:", values);
                setSubmitting(false);
              }}
            >
              <Form className={styles.outBoxInnerrightBoxFormm}>
                <ClayLayout.Col
                  size={12}
                  className={styles.outBoxInnerrightBoxWelcome}
                >
                  <ClayForm.Group>
                    <ClayInput.Group>
                      <ClayInput.GroupItem>
                        <label htmlFor="projectname">Project Name</label>
                        <Field
                          as={ClayInput}
                          placeholder="Project Name"
                          type="text"
                          name="name"
                          id="name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-danger"
                        />
                      </ClayInput.GroupItem>
                      <ClayInput.GroupItem>
                        <label htmlFor="owner">Owner</label>
                        <Field
                          as={ClayDropDownWithItems}
                          placeholder="Owner"
                          type="text"
                          name="owner"
                          id="owner"
                          items={[
                            {
                              label: "Owner 1",
                              onClick: () => {
                                setValues({ ...values, owner: "Owner 1" });
                              },
                            },
                            {
                              label: "Owner 2",
                              onClick: () => {
                                setValues({ ...values, owner: "Owner 2" });
                              },
                            },
                          ]}
                          spritemap={spritemap}
                          trigger={
                            <ClayButton
                              displayType="unstyled"
                              aria-labelledby=""
                              id="owner"
                              name="owner"
                              className={styles.outBoxInnerrightBoxWelcomeBtn}
                            >
                              {values.owner === "" ? (
                                <div>
                                  Select
                                  <ClaySticker
                                    displayType="dark"
                                    className={
                                      styles.outBoxInnerrightBoxWelcomeIcn
                                    }
                                  >
                                    <ClayIcon
                                      spritemap={spritemap}
                                      symbol="angle-down"
                                    />
                                  </ClaySticker>
                                </div>
                              ) : (
                                <Heading level={6} weight="light">
                                  {values.owner}
                                </Heading>
                              )}
                            </ClayButton>
                          }
                        />
                      </ClayInput.GroupItem>
                    </ClayInput.Group>
                  </ClayForm.Group>
                </ClayLayout.Col>

                <ClayLayout.Col
                  size={12}
                  className={styles.outBoxInnerrightBoxWelcome}
                >
                  <ClayForm.Group className={styles.outBoxInnerrightBoxDate}>
                    <ClayInput.Group>
                      <ClayInput.GroupItem
                        className={styles.outBoxInnerrightBoxDate}
                      >
                        <label htmlFor="projectstartdate">
                          Project Start Date
                        </label>
                        <ClayDatePicker
                          id="projectstartdate"
                          onChange={setDateValue1}
                          placeholder="YYYY-MM-DD"
                          spritemap={spritemap}
                          value={dateValue1}
                          years={{
                            end: 2024,
                            start: 1997,
                          }}
                        />
                      </ClayInput.GroupItem>

                      <ClayInput.GroupItem
                        className={styles.outBoxInnerrightBoxDate}
                      >
                        <label htmlFor="projectenddate">Project End Date</label>
                        <ClayDatePicker
                          id="projectenddate"
                          onChange={setDateValue2}
                          placeholder="YYYY-MM-DD"
                          spritemap={spritemap}
                          value={datevalue2}
                          years={{
                            end: 2024,
                            start: 1997,
                          }}
                        />
                      </ClayInput.GroupItem>
                    </ClayInput.Group>
                  </ClayForm.Group>
                </ClayLayout.Col>

                <ClayLayout.Col
                  size={12}
                  className={styles.outBoxInnerrightBoxResetCreate}
                >
                  <ClayButton
                    displayType="secondary"
                    onClick={() => {
                      setDateValue1("");
                      setDateValue2("");
                      setValues({ ...values, name: "", owner: "" });
                    }}
                  >
                    Reset
                  </ClayButton>
                  <ClayButton
                    displayType="secondary"
                    className={styles.outBoxInnerrightBoxResetCreateBtn}
                    type="submit"
                  >
                    Create
                  </ClayButton>
                </ClayLayout.Col>
              </Form>
            </Formik>
          </ClayLayout.Row>
        </ClayLayout.Col>
      </ClayLayout.Row>
    </ClayLayout.Sheet>
  );
};

export default Project;
