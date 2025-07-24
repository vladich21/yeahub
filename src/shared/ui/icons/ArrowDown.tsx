interface ArrowDownProps {
  className?: string;
}
export const ArrowDown = ({ className }: ArrowDownProps) => (
  <svg
    className={className}
    width="10"
    height="5"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="#6A0BFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
