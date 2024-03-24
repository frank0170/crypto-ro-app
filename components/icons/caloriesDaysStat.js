import React from "react";

const CaloriesDaysStat = ({ size, isActive }) => {
  return (
    <svg
      width="30"
      height="50"
      viewBox="0 0 30 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="30"
        height={Math.min(size, 50)} // Ensure it doesn't exceed 50px
        rx="6"
        fill={`${isActive ? "#FF8036" : "#6B7280"}`}
        y={50 - Math.min(size, 50)} // Adjusted here
      />
    </svg>
  );
};

export default CaloriesDaysStat;
