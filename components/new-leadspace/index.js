// import './index.scss';
import React, {useEffect} from "react";

const NewLeadspace = () => {
    
    useEffect(() => {
        let whiteTextEle = document.getElementsByClassName("bx--text-white")[0];
        let blackTextEle = document.getElementsByClassName("bx--text-black")[0];
        setTimeout(() => {
            let intervalID = setInterval(() => {
                blackTextEle.textContent =
                blackTextEle.textContent + whiteTextEle.textContent.charAt(0);
                whiteTextEle.textContent = whiteTextEle.textContent.substring(1);
                if (whiteTextEle.textContent.length == 0) clearInterval(intervalID);
            }, 80);
        }, 1000);
    }, []);
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
}

export default NewLeadspace;