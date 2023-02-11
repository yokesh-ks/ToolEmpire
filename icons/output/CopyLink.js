import * as React from "react";
const SvgCopyLink = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#copy_link_svg__a)">
      <path d="M0 0h28v28H0V0Z" fill="#fff" fillOpacity={0.01} />
      <path d="M28 0H0v28h28V0Z" fill="#fff" fillOpacity={0.01} />
      <path
        d="M7 5.79V4.084c0-.966.783-1.75 1.75-1.75h15.167c.966 0 1.75.784 1.75 1.75V19.25a1.75 1.75 0 0 1-1.75 1.75h-1.74"
        stroke="#000"
        strokeWidth={0.7}
      />
      <path
        d="M20.417 5.833H4.083a1.75 1.75 0 0 0-1.75 1.75v16.334c0 .966.784 1.75 1.75 1.75h16.334a1.75 1.75 0 0 0 1.75-1.75V7.583a1.75 1.75 0 0 0-1.75-1.75Z"
        fill="#2F88FF"
        stroke="#000"
        strokeWidth={0.7}
        strokeLinejoin="round"
      />
      <path
        d="m10.756 13.48 3.088-3.213c.847-.847 2.238-.828 3.108.042.87.87.888 2.26.042 3.108l-1.115 1.18M7.855 16.769c-.297.298-.913.892-.913.892-.847.847-.87 2.356 0 3.226.87.87 2.261.889 3.108.042l3.013-2.735"
        stroke="#fff"
        strokeWidth={0.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.887 16.525a2.253 2.253 0 0 1-.66-1.443 2.138 2.138 0 0 1 .618-1.665M13.021 15.086c.87.87.888 2.261.042 3.108"
        stroke="#fff"
        strokeWidth={0.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="copy_link_svg__a">
        <path fill="#fff" d="M0 0h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCopyLink;
