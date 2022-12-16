import React from "react";

function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  return (
    <div>
      {day} {hours < 10 ? "0" + hours : hours}:
      {minutes < 10 ? "0" + minutes : minutes}
    </div>
  );
}

export default FormattedDate;
