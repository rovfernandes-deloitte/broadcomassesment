import React, { useState } from "react";
import { ClayVerticalNav } from "@clayui/nav";
import ClayLayout from "@clayui/layout";
import styles from "./Issues.module.scss";
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
import NavBar from "../NavBar/NavBar";
const spritemap = "/icons.svg";

const Issues: React.FC = () => {
  const name = localStorage.getItem("name");
  const [value, setValue] = useState("");
  const items = [
    {
      children: [
        { id: 2, name: "Apple" },
        { id: 3, name: "Banana" },
        { id: 4, name: "Mangos" },
      ],
      id: 1,
      name: "Fruit",
    },
    {
      children: [
        { id: 6, name: "Potatoes" },
        { id: 7, name: "Tomatoes" },
        { id: 8, name: "Onions" },
      ],
      id: 5,
      name: "Vegetable",
    },
  ];
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
                Create User Stories/ Tasks/ Bugs
              </Heading>
            </ClayLayout.Col>
            <ClayLayout.Col
              size={12}
              className={styles.outBoxInnerrightBoxWelcome}
            >
              <ClayForm.Group>
                <ClayInput.Group>
                  <ClayInput.GroupItem>
                    <label htmlFor="summary">Summary</label>
                    <ClayInput placeholder="Summary" type="text" id="summary" />
                  </ClayInput.GroupItem>
                </ClayInput.Group>
              </ClayForm.Group>
            </ClayLayout.Col>
            <ClayLayout.Col
              size={12}
              className={styles.outBoxInnerrightBoxWelcomeBoxx}
            >
              <ClayForm.Group>
                <ClayInput.Group>
                  <ClayInput.GroupItem>
                    <label htmlFor="type">Type</label>
                    <ClayDropDownWithItems
                      items={[
                        {
                          href: "#one",
                          label: "My Profile",
                          symbolLeft: "user",
                        },
                        {
                          href: "#two",
                          label: "Sign Out",
                          symbolLeft: "logout",
                        },
                      ]}
                      spritemap={spritemap}
                      trigger={
                        <ClayButton
                          displayType="unstyled"
                          aria-labelledby=""
                          id="owner"
                          className={styles.outBoxInnerrightBoxWelcomeBtn}
                        >
                          Select{" "}
                          <ClaySticker
                            displayType="dark"
                            className={styles.outBoxInnerrightBoxWelcomeIcn}
                          >
                            <ClayIcon
                              spritemap={spritemap}
                              symbol="angle-down"
                            />
                          </ClaySticker>
                        </ClayButton>
                      }
                    />
                  </ClayInput.GroupItem>

                  <ClayInput.GroupItem>
                    <label htmlFor="project">Project</label>
                    <ClayDropDownWithItems
                      items={[
                        {
                          href: "#one",
                          label: "My Profile",
                          symbolLeft: "user",
                        },
                        {
                          href: "#two",
                          label: "Sign Out",
                          symbolLeft: "logout",
                        },
                      ]}
                      spritemap={spritemap}
                      trigger={
                        <ClayButton
                          displayType="unstyled"
                          aria-labelledby=""
                          id="project"
                          className={styles.outBoxInnerrightBoxWelcomeBtn}
                        >
                          Select{" "}
                          <ClaySticker
                            displayType="dark"
                            className={styles.outBoxInnerrightBoxWelcomeIcn}
                          >
                            <ClayIcon
                              spritemap={spritemap}
                              symbol="angle-down"
                            />
                          </ClaySticker>
                        </ClayButton>
                      }
                    />
                  </ClayInput.GroupItem>
                </ClayInput.Group>
              </ClayForm.Group>
            </ClayLayout.Col>
            <ClayLayout.Col
              size={12}
              className={styles.outBoxInnerrightBoxWelcomeBoxx}
            >
              <ClayForm.Group>
                <ClayInput.Group>
                  <ClayInput.GroupItem
                    className={styles.outBoxInnerrightBoxSpacing}
                  >
                    <ClayForm.Group
                      className={styles.outBoxInnerrightBoxSpacing}
                    >
                      <label htmlFor="basicInputText">Description</label>
                      <ClayInput
                        component="textarea"
                        id="basicInputText"
                        placeholder="Write Description"
                        type="text"
                        className={styles.outBoxInnerrightBoxSpacing}
                      />
                    </ClayForm.Group>
                  </ClayInput.GroupItem>
                </ClayInput.Group>
              </ClayForm.Group>
            </ClayLayout.Col>
            <ClayLayout.Col
              size={12}
              className={styles.outBoxInnerrightBoxWelcomeBoxx}
            >
              <ClayForm.Group>
                <ClayInput.Group>
                  <ClayInput.GroupItem>
                    <label htmlFor="type">Type</label>
                    <ClayDropDownWithItems
                      items={[
                        {
                          href: "#one",
                          label: "My Profile",
                          symbolLeft: "user",
                        },
                        {
                          href: "#two",
                          label: "Sign Out",
                          symbolLeft: "logout",
                        },
                      ]}
                      spritemap={spritemap}
                      trigger={
                        <ClayButton
                          displayType="unstyled"
                          aria-labelledby=""
                          id="owner"
                          className={styles.outBoxInnerrightBoxWelcomeBtn}
                        >
                          Select{" "}
                          <ClaySticker
                            displayType="dark"
                            className={styles.outBoxInnerrightBoxWelcomeIcn}
                          >
                            <ClayIcon
                              spritemap={spritemap}
                              symbol="angle-down"
                            />
                          </ClaySticker>
                        </ClayButton>
                      }
                    />
                  </ClayInput.GroupItem>

                  <ClayInput.GroupItem>
                    <label htmlFor="project">Project</label>
                    <ClayDropDownWithItems
                      items={[
                        {
                          href: "#one",
                          label: "My Profile",
                          symbolLeft: "user",
                        },
                        {
                          href: "#two",
                          label: "Sign Out",
                          symbolLeft: "logout",
                        },
                      ]}
                      spritemap={spritemap}
                      trigger={
                        <ClayButton
                          displayType="unstyled"
                          aria-labelledby=""
                          id="project"
                          className={styles.outBoxInnerrightBoxWelcomeBtn}
                        >
                          Select{" "}
                          <ClaySticker
                            displayType="dark"
                            className={styles.outBoxInnerrightBoxWelcomeIcn}
                          >
                            <ClayIcon
                              spritemap={spritemap}
                              symbol="angle-down"
                            />
                          </ClaySticker>
                        </ClayButton>
                      }
                    />
                  </ClayInput.GroupItem>
                </ClayInput.Group>
              </ClayForm.Group>
            </ClayLayout.Col>
            <ClayLayout.Col
              size={12}
              className={styles.outBoxInnerrightBoxWelcomeBoxx}
            >
              <ClayForm.Group>
                <ClayInput.Group>
                  <ClayInput.GroupItem>
                    <label htmlFor="type">Type</label>
                    <ClayDropDownWithItems
                      items={[
                        {
                          href: "#one",
                          label: "My Profile",
                          symbolLeft: "user",
                        },
                        {
                          href: "#two",
                          label: "Sign Out",
                          symbolLeft: "logout",
                        },
                      ]}
                      spritemap={spritemap}
                      trigger={
                        <ClayButton
                          displayType="unstyled"
                          aria-labelledby=""
                          id="owner"
                          className={styles.outBoxInnerrightBoxWelcomeBtn}
                        >
                          Select{" "}
                          <ClaySticker
                            displayType="dark"
                            className={styles.outBoxInnerrightBoxWelcomeIcn}
                          >
                            <ClayIcon
                              spritemap={spritemap}
                              symbol="angle-down"
                            />
                          </ClaySticker>
                        </ClayButton>
                      }
                    />
                  </ClayInput.GroupItem>

                  <ClayInput.GroupItem>
                    <label htmlFor="project">Project</label>
                    <ClayDropDownWithItems
                      items={[
                        {
                          href: "#one",
                          label: "My Profile",
                          symbolLeft: "user",
                        },
                        {
                          href: "#two",
                          label: "Sign Out",
                          symbolLeft: "logout",
                        },
                      ]}
                      spritemap={spritemap}
                      trigger={
                        <ClayButton
                          displayType="unstyled"
                          aria-labelledby=""
                          id="project"
                          className={styles.outBoxInnerrightBoxWelcomeBtn}
                        >
                          Select{" "}
                          <ClaySticker
                            displayType="dark"
                            className={styles.outBoxInnerrightBoxWelcomeIcn}
                          >
                            <ClayIcon
                              spritemap={spritemap}
                              symbol="angle-down"
                            />
                          </ClaySticker>
                        </ClayButton>
                      }
                    />
                  </ClayInput.GroupItem>
                </ClayInput.Group>
              </ClayForm.Group>
            </ClayLayout.Col>
            <ClayLayout.Col
              size={6}
              className={styles.outBoxInnerrightBoxWelcomeBoxx}
            >
              <ClayForm.Group>
                <ClayInput.Group>
                  <ClayInput.GroupItem>
                    <label htmlFor="summary">Summary</label>
                    <ClayInput placeholder="Summary" type="text" id="summary" />
                  </ClayInput.GroupItem>
                </ClayInput.Group>
              </ClayForm.Group>
            </ClayLayout.Col>
            <ClayLayout.Col
              size={12}
              className={styles.outBoxInnerrightBoxResetCreate}
            >
              <ClayButton displayType="secondary">Reset</ClayButton>
              <ClayButton
                displayType="secondary"
                className={styles.outBoxInnerrightBoxResetCreateBtn}
              >
                Create
              </ClayButton>
            </ClayLayout.Col>
          </ClayLayout.Row>
        </ClayLayout.Col>
      </ClayLayout.Row>
    </ClayLayout.Sheet>
  );
};

export default Issues;
