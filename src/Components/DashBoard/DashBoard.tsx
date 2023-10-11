import React, { useEffect, useState } from "react";
import { ClayVerticalNav } from "@clayui/nav";
import ClayLayout from "@clayui/layout";
import styles from "./DashBoard.module.scss";
import SideBar from "../SideBar/SideBar";
import ClayButton, { ClayButtonWithIcon } from "@clayui/button";
import ClayIcon from "@clayui/icon";
import { ClayDropDownWithItems } from "@clayui/drop-down";
import ClayUpperToolbar from "@clayui/upper-toolbar";
import ClaySticker from "@clayui/sticker";
import { Heading } from "@clayui/core";
import axios from "axios";
import { useOktaAuth } from "@okta/okta-react";
import NoProject from "./NoProject";
import AllProjects from "./AllProjects";
import NavBar from "../NavBar/NavBar";
const spritemap = "/icons.svg";

const DashBoard: React.FC = () => {
  const [name, setName] = useState("");
  const { oktaAuth, authState } = useOktaAuth();
  const commonArray = [
    {
      id: "3",
      href: "#2",
      label: "Project Board",
    },
    {
      id: "4",
      href: "#3",
      label: "Create Issues",
    },

    {
      id: "8",
      href: "#7",
      label: "Create Project",
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);
  const signOut = () => {
    localStorage.clear();
    oktaAuth.signOut();
  };
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/user?userID=6"
      );
      const response1 = await axios.get(
        "https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project"
      );
      console.log(response1.data);
      setName(response?.data[0].name);
      localStorage.setItem("name", response?.data[0].name);
      console.log(response.data[0].name);
      console.log("Data:", response.data);
      console.log(name);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  // Call the fetchData function

  return (
    <ClayLayout.Sheet className={styles.outBox}>
      <ClayLayout.Row justify="start" className={styles.outBoxInner}>
        <SideBar />
        <ClayLayout.Col size={10} className={styles.outBoxInnerRightBox}>
          <ClayLayout.Row>
            <ClayLayout.Col size={12} className={styles.outBoxInnerRightBox}>
              <NavBar />
            </ClayLayout.Col>
            {<AllProjects />}
          </ClayLayout.Row>
        </ClayLayout.Col>
      </ClayLayout.Row>
    </ClayLayout.Sheet>
  );
};

export default DashBoard;
