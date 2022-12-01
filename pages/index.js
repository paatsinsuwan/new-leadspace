/* eslint-disable jsx-a11y/anchor-has-content */
import "../styles/landing.scss";
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
import React, { useEffect, useState } from "react";

/**
 * Homepage
 *
 * @returns {*} JSX for Homepage
 */
const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {}, []);
  return (
    <>
      <div className={`bx--grid`}>
        <div className={`bx--row`}>
          <div className={`bx--col`}>
            <div className={`bx--typewriter-effect ${loaded ? "show" : ""}`}>
              <h1 className={`bx--leadspace-title`}>
                We make the world work better
                <span className={`bx--blue`}>|</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
