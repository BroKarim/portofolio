import * as React from "react";
const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    {...props}
  >
    <title>{"file_type_vscode"}</title>
    <path
      d="m29.01 5.03-5.766-2.776a1.742 1.742 0 0 0-1.989.338L2.38 19.8a1.166 1.166 0 0 0-.08 1.647c.025.027.05.053.077.077l1.541 1.4a1.165 1.165 0 0 0 1.489.066L28.142 5.75A1.158 1.158 0 0 1 30 6.672v-.067a1.748 1.748 0 0 0-.99-1.575Z"
      style={{
        fill: "#0065a9",
      }}
    />
    <path
      d="m29.01 26.97-5.766 2.777a1.745 1.745 0 0 1-1.989-.338L2.38 12.2a1.166 1.166 0 0 1-.08-1.647c.025-.027.05-.053.077-.077l1.541-1.4A1.165 1.165 0 0 1 5.41 9.01l22.732 17.24A1.158 1.158 0 0 0 30 25.328v.072a1.749 1.749 0 0 1-.99 1.57Z"
      style={{
        fill: "#007acc",
      }}
    />
    <path
      d="M23.244 29.747a1.745 1.745 0 0 1-1.989-.338A1.025 1.025 0 0 0 23 28.684V3.316a1.024 1.024 0 0 0-1.749-.724 1.744 1.744 0 0 1 1.989-.339l5.765 2.772A1.748 1.748 0 0 1 30 6.6v18.8a1.748 1.748 0 0 1-.991 1.576Z"
      style={{
        fill: "#1f9cf0",
      }}
    />
  </svg>
);
export default SvgComponent;
