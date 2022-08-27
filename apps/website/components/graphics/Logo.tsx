import { memo, SVGProps } from 'react';

const SvgComponent = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128.003 112.721"
    fill="currentColor"
    {...props}
  >
    <title>TagHub logo</title>
    <circle cx={64.002} cy={56.36} r={15.694} />
    <circle cx={64.002} cy={20.081} r={10.446} />
    <path d="M64.002 82.194c5.769 0 10.446 4.677 10.446 10.446s-4.677 10.446-10.446 10.446-10.446-4.677-10.446-10.446 4.677-10.446 10.446-10.446Z" />
    <circle cx={35.483} cy={6.965} r={6.964} />
    <circle cx={92.52} cy={105.756} r={6.964} />
    <circle cx={92.52} cy={6.965} r={6.964} />
    <circle cx={35.483} cy={105.756} r={6.964} />
    <circle cx={121.038} cy={56.361} r={6.964} />
    <circle cx={6.965} cy={56.36} r={6.964} />
    <circle cx={32.583} cy={38.221} r={10.446} />
    <circle cx={95.42} cy={74.5} r={10.446} />
    <circle cx={32.583} cy={74.5} r={10.446} />
    <circle cx={95.42} cy={38.221} r={10.446} />
  </svg>
);

const Logo = memo(SvgComponent);
export default Logo;
