import React, { useEffect, useState } from "react";
import ClayLayout from "@clayui/layout";
import styles from "./DashBoard.module.scss";
import { Heading } from "@clayui/core";
import axios from "axios";
import ClayCard from "@clayui/card";
import { Text } from "@clayui/core/lib/typography";
import ClayBadge from "@clayui/badge";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { selectProject, getProject } from "../../feature/project/projectSlice";
const spritemap = "/icons.svg";

const AllProjects: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectProject);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project"
      );
      console.log(response.data);
      dispatch(getProject(response.data));
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <>
      <ClayLayout.Col size={12} className={styles.outBoxInnerrightBoxWelcome}>
        <Heading level={1} weight="semi-bold">
          Project Details
        </Heading>
      </ClayLayout.Col>
      <ClayLayout.Col size={3} className={styles.outBoxInnerrightBoxWelcome}>
        <ClayLayout.Row>
          <Heading level={6} weight="semi-bold">
            To Do
          </Heading>
        </ClayLayout.Row>
        {data.slice(0, 3).map((data: any, index) => {
          const date = new Date(data.projectStartDate)
            .toISOString()
            .split("T")[0];
          console.log(date);
          return (
            <ClayLayout.Row>
              <ClayCard>
                <ClayCard.Body>
                  <ClayCard.Description displayType="title">
                    <Text size={2}>
                      Id {data.projectID}
                      {"   "}Date {date}
                    </Text>
                  </ClayCard.Description>
                  <ClayCard.Description truncate={false} displayType="text">
                    <Text size={1}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Excepturi fugiat, voluptate
                    </Text>
                  </ClayCard.Description>
                  <ClayCard.Description displayType="text">
                    <Text size={2}>{data.projectName} </Text>
                    <ClayBadge displayType="success" label="LOW" />
                  </ClayCard.Description>
                </ClayCard.Body>
              </ClayCard>
            </ClayLayout.Row>
          );
        })}
      </ClayLayout.Col>
      <ClayLayout.Col size={3} className={styles.outBoxInnerrightBoxWelcome}>
        <ClayLayout.Row>
          <Heading level={6} weight="semi-bold">
            Development
          </Heading>
        </ClayLayout.Row>
        {data.slice(3, 5).map((data: any, index) => {
          const date = new Date(data.projectStartDate)
            .toISOString()
            .split("T")[0];
          console.log(date);
          return (
            <ClayLayout.Row>
              <ClayCard>
                <ClayCard.Body>
                  <ClayCard.Description displayType="title">
                    <Text size={2}>
                      Id {data.projectID}
                      {"   "}Date {date}
                    </Text>
                  </ClayCard.Description>
                  <ClayCard.Description truncate={false} displayType="text">
                    <Text size={1}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Excepturi fugiat, voluptate
                    </Text>
                  </ClayCard.Description>
                  <ClayCard.Description displayType="text">
                    <Text size={2}>{data.projectName} </Text>
                    <ClayBadge displayType="success" label="LOW" />
                  </ClayCard.Description>
                </ClayCard.Body>
              </ClayCard>
            </ClayLayout.Row>
          );
        })}
      </ClayLayout.Col>
      <ClayLayout.Col size={3} className={styles.outBoxInnerrightBoxWelcome}>
        <ClayLayout.Row>
          <Heading level={6} weight="semi-bold">
            Testing
          </Heading>
        </ClayLayout.Row>
        {data.slice(6, 7).map((data: any, index) => {
          const date = new Date(data.projectStartDate)
            .toISOString()
            .split("T")[0];
          console.log(date);
          return (
            <ClayLayout.Row>
              <ClayCard>
                <ClayCard.Body>
                  <ClayCard.Description displayType="title">
                    <Text size={2}>
                      Id {data.projectID}
                      {"   "}Date {date}
                    </Text>
                  </ClayCard.Description>
                  <ClayCard.Description truncate={false} displayType="text">
                    <Text size={1}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Excepturi fugiat, voluptate
                    </Text>
                  </ClayCard.Description>
                  <ClayCard.Description displayType="text">
                    <Text size={2}>{data.projectName} </Text>
                    <ClayBadge displayType="danger" label="LOW" />
                  </ClayCard.Description>
                </ClayCard.Body>
              </ClayCard>
            </ClayLayout.Row>
          );
        })}
      </ClayLayout.Col>
      <ClayLayout.Col size={3} className={styles.outBoxInnerrightBoxWelcome}>
        <ClayLayout.Row>
          <Heading level={6} weight="semi-bold">
            Completed
          </Heading>
        </ClayLayout.Row>
        {data.slice(9, 11).map((data: any, index) => {
          const date = new Date(data.projectStartDate)
            .toISOString()
            .split("T")[0];
          return (
            <ClayLayout.Row>
              <ClayCard>
                <ClayCard.Body>
                  <ClayCard.Description displayType="title">
                    <Text size={2}>
                      Id {data.projectID}
                      {"   "}Date {date}
                    </Text>
                  </ClayCard.Description>
                  <ClayCard.Description truncate={false} displayType="text">
                    <Text size={1}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Excepturi fugiat, voluptate
                    </Text>
                  </ClayCard.Description>
                  <ClayCard.Description displayType="text">
                    <Text size={2}>{data.projectName} </Text>
                    <ClayBadge displayType="warning" label="LOW" />
                  </ClayCard.Description>
                </ClayCard.Body>
              </ClayCard>
            </ClayLayout.Row>
          );
        })}
      </ClayLayout.Col>
    </>
  );
};

export default AllProjects;
