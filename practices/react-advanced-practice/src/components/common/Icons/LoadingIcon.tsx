import { SVGProps } from 'react';

const LoadingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={20}
    height={20}
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 26.349 26.35"
    {...props}
  >
    <circle cx={13.792} cy={3.082} r={3.082} />
    <circle cx={13.792} cy={24.501} r={1.849} />
    <circle cx={6.219} cy={6.218} r={2.774} />
    <circle cx={21.365} cy={21.363} r={1.541} />
    <circle cx={3.082} cy={13.792} r={2.465} />
    <circle cx={24.501} cy={13.791} r={1.232} />
    <path d="M4.694 19.84a2.155 2.155 0 0 0 0 3.05 2.155 2.155 0 0 0 3.05 0 2.155 2.155 0 0 0 0-3.05 2.146 2.146 0 0 0-3.05 0z" />
    <circle cx={21.364} cy={6.218} r={0.924} />
  </svg>
);

export default LoadingIcon;
