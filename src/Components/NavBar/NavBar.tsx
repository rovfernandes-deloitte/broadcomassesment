import React, { useEffect, useState } from "react";
import { ClayVerticalNav } from "@clayui/nav";
import ClayLayout from "@clayui/layout";
import styles from "./NavBar.module.scss";

import ClayButton, { ClayButtonWithIcon } from "@clayui/button";
import ClayIcon from "@clayui/icon";
import { ClayDropDownWithItems } from "@clayui/drop-down";
import ClayUpperToolbar from "@clayui/upper-toolbar";
import ClaySticker from "@clayui/sticker";
import axios from "axios";
import { useOktaAuth } from "@okta/okta-react";

const spritemap = "/icons.svg";

const NavBar: React.FC = () => {
  const [name, setName] = useState("");
  const { oktaAuth, authState } = useOktaAuth();
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
      setName(response?.data[0].name);
      localStorage.setItem("name", response?.data[0].name);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <ClayUpperToolbar className={styles.outBoxInnerrightBoxNavba}>
      <ClayUpperToolbar.Item expand={true}>
        <ClayUpperToolbar.Input placeholder="Search..." />
      </ClayUpperToolbar.Item>

      <ClayUpperToolbar.Item expand={true}>
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
              onClick: signOut,
            },
          ]}
          spritemap={spritemap}
          trigger={
            <ClayButton displayType="unstyled" aria-labelledby="">
              {name}{" "}
              <ClaySticker displayType="dark">
                <ClayIcon spritemap={spritemap} symbol="user" />
              </ClaySticker>
            </ClayButton>
          }
        />
      </ClayUpperToolbar.Item>
    </ClayUpperToolbar>
  );
};

export default NavBar;
