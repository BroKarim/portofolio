import * as React from "react";
const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#1ABCFE"
      fillRule="evenodd"
      d="M16 16a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#0ACF83"
      fillRule="evenodd"
      d="M8 24a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#FF7262"
      fillRule="evenodd"
      d="M16 4v8h4a4 4 0 0 0 0-8h-4Z"
      clipRule="evenodd"
    />
    <path
      fill="#F24E1E"
      fillRule="evenodd"
      d="M8 8a4 4 0 0 0 4 4h4V4h-4a4 4 0 0 0-4 4Z"
      clipRule="evenodd"
    />
    <path
      fill="#A259FF"
      fillRule="evenodd"
      d="M8 16a4 4 0 0 0 4 4h4v-8h-4a4 4 0 0 0-4 4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
