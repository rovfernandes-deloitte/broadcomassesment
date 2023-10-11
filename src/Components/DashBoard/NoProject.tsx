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

const spritemap = "/icons.svg";

const NoProject: React.FC = () => {
  return (
    <>
      <ClayLayout.Col size={12} className={styles.outBoxInnerrightBoxWelcome}>
        <Heading level={1} weight="semi-bold">
          Welcome to Tracker
        </Heading>
      </ClayLayout.Col>
      <ClayLayout.Col size={12} className={styles.outBoxInnerrightBoxWelcome}>
        <Heading level={6} weight="semi-bold">
          Seems like you have’nt created any project yet. Click here to onboad a
          new project.
        </Heading>
      </ClayLayout.Col>
      <ClayLayout.Col size={12} className={styles.outBoxInnerrightBoxImages}>
        <div className={styles.outBoxInnerleftBoxImagesInner}>
          <img
            alt="thumbnail"
            className={styles.outBoxInnerleftBoxImagesInner}
            src="/DashboardPerson.png"
          />
        </div>
      </ClayLayout.Col>
    </>
  );
};

export default NoProject;
