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
  useEffect(() => {}, []);
  return (
    <>
      <div className={`bx--grid`}>
        <div className={`bx--row`}>
          <div className={`bx--col`}>
            <div className={`bx--typewriter-effect`}>
              <h1 className={`bx--leadspace-title`}>
                <span className={`bx--text-black`}></span>
                <span className={`bx--text-blue`}>|</span>
                <span className={`bx--text-white`}>
                  We make the world work better
                </span>
              </h1>
              <p className={`bx--leadspace-copy`}>
                Description text that spans multiple lines, especially when
                translated but maxed out at three lines
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
