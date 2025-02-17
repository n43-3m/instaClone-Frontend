const CrossIcon = (prop) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={prop.size || 24}
    height={prop.size || 24}
    fill={prop.color || "white"}
    viewBox="0 0 24 24"
  >
    <path
      stroke={prop.color || "white"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 8-8 8m0-8 8 8"
    />
  </svg>
);
export default CrossIcon;
