/* eslint-disable jsx-a11y/anchor-has-content */
import "../../styles/landing.scss";
import { Desktop, Pattern, Touch } from "@carbon/pictograms-react";
import {
  TableOfContents,
  LeadSpace,
  Layout,
  ContentBlockMedia,
  LinkList,
  ContentBlockMixed,
  ContentBlockSegmented,
  ContentBlockSimple,
  CardSectionImages,
  CardSectionSimple,
} from "@carbon/ibmdotcom-react";
import { ArrowRight20 } from "@carbon/icons-react";
import NewLeadspace from "../../components/new-leadspace";
import React, { useEffect, useState } from "react";

/**
 * Homepage
 *
 * @returns {*} JSX for Homepage
 */
const Home = () => {
  const leadspaceTitle = "We make the world work better";
  const leadspaceCopy =
    "Lorem ipsum descriptive text that spans multiple lines when translated, but should not exceed two lines";
  const leadspaceCTAs = [
    { copy: "Button1", href: "https://example.com" },
    { copy: "Button2", href: "https://example.com" },
  ];
  return (
    <NewLeadspace
      title={leadspaceTitle}
      copy={leadspaceCopy}
      ctas={leadspaceCTAs}
      large={true}
    />
  );
};

export default Home;
