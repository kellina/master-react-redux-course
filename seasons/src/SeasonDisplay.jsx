import React from "react";
import "./SeasonDisplay.css";

function getSeason(lat, month) {
  if (month < 2 && month > 6) {
    return lat < 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}
const seasonConfig = {
  summer: {
    text: "Let's go to the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is so cold!",
    iconName: "snowflake",
  },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display   ${season}`}>
      <i className={`massive ${iconName} icon icon-left`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
