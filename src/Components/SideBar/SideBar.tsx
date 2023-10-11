import React, { useState } from "react";
import { ClayVerticalNav } from "@clayui/nav";
import ClayLayout from "@clayui/layout";
import styles from "./SideBar.module.scss";
import { useHistory } from "react-router-dom";
const SideBar: React.FC = () => {
  const history = useHistory();
  const handleProjectRoute = () => {
    console.log("hii");
    history.push("/createproject");
  };
  const handleRoute = (d: string) => {
    let path = "";
    if (d === "Create Project") {
      path = "createproject";
    } else if (d === "Create Issues") {
      path = "createissues";
    } else {
      path = "dashboard";
    }
    console.log("hii");
    history.push(`/${path}`);
  };
  const commonArray = [
    {
      id: "3",
      label: "Project Board",
    },
    {
      id: "4",

      label: "Create Issues",
    },

    {
      id: "8",

      label: "Create Project",
    },
  ];
  return (
    <ClayLayout.Col size={2} className={styles.outBoxInnerleftBox}>
      <ClayLayout.Row className={styles.outBoxInnerleftBoxImages}>
        <div className="aspect-ratio aspect-ratio-8-to-3">
          <img
            alt="thumbnail"
            src="/DashboardArrow.png"
            className={styles.outBoxInnerleftBoxImagesInner}
          />
        </div>
      </ClayLayout.Row>
      <ClayLayout.Row className={styles.outBoxInnerleftBoxTabs}>
        <ClayVerticalNav
          defaultExpandedKeys={new Set(["5"])}
          items={commonArray}
        >
          {commonArray?.map((item) => {
            return (
              <ClayVerticalNav.Item
                key={item.id}
                className={styles.outBoxInnerleftBoxTabsTextt}
                onClick={() => handleRoute(item.label)}
              >
                {item.label}
              </ClayVerticalNav.Item>
            );
          })}
        </ClayVerticalNav>
      </ClayLayout.Row>
      <ClayLayout.Row className={styles.outBoxInnerleftBoxImages}>
        <div className="aspect-ratio aspect-ratio-8-to-3">
          <img
            alt="thumbnail"
            className={styles.outBoxInnerleftBoxImagesInnerLast}
            src="/DashboardLanguage.png"
          />
        </div>
      </ClayLayout.Row>
    </ClayLayout.Col>
  );
};

export default SideBar;
