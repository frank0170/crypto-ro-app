import React from "react";

const ProfileIcon = ({ isActive }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.8796 13.9202L27.5729 19.4935C26.4529 24.3068 24.2396 26.2535 20.0796 25.8535C19.4129 25.8002 18.6929 25.6802 17.9196 25.4935L15.6796 24.9602C10.1196 23.6402 8.39959 20.8935 9.70626 15.3202L11.0129 9.73351C11.2796 8.60017 11.5996 7.61351 11.9996 6.80017C13.5596 3.57351 16.2129 2.70684 20.6663 3.76017L22.8929 4.28017C28.4796 5.58684 30.1863 8.34684 28.8796 13.9202Z"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.0805 25.8531C19.2538 26.4131 18.2138 26.8798 16.9471 27.2931L14.8405 27.9865C9.54712 29.6931 6.76045 28.2665 5.04045 22.9731L3.33379 17.7065C1.62712 12.4131 3.04045 9.61314 8.33379 7.90647L10.4405 7.21314C10.9871 7.0398 11.5071 6.89314 12.0005 6.7998C11.6005 7.61314 11.2805 8.5998 11.0138 9.73314L9.70712 15.3198C8.40046 20.8931 10.1205 23.6398 15.6805 24.9598L17.9205 25.4931C18.6938 25.6798 19.4138 25.7998 20.0805 25.8531Z"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.8535 11.3735L23.3202 13.0135"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5469 16.5332L19.4135 17.5199"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ProfileIcon;
