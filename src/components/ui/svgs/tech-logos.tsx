import type { SVGProps } from "react";

const Pytorch = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path
      d="M19.8 5.1 16 8.9a8.9 8.9 0 1 1-5.2 2.2"
      stroke="#EE4C2C"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="22.8" cy="9.2" r="1.8" fill="#EE4C2C" />
  </svg>
);

const ScikitLearn = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <ellipse cx="12" cy="18" rx="8" ry="5" fill="#3499CD" />
    <ellipse cx="21" cy="14" rx="8" ry="5" fill="#F89939" />
    <text
      x="16"
      y="19"
      textAnchor="middle"
      fontSize="7"
      fontWeight="700"
      fill="white"
    >
      sk
    </text>
  </svg>
);

const Numpy = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path d="M16 3 28 9.5v13L16 29 4 22.5v-13L16 3Z" fill="#4DABCF" />
    <path d="M16 3v13l12-6.5L16 3Z" fill="#7CC5E8" />
    <path d="M16 16v13l12-6.5v-13L16 16Z" fill="#4D77CF" />
    <path d="M4 9.5 16 16v13L4 22.5v-13Z" fill="#6998D8" />
  </svg>
);

const Pandas = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <rect x="7" y="5" width="4" height="12" fill="#150458" />
    <rect x="7" y="20" width="4" height="7" fill="#150458" />
    <rect x="14" y="10" width="4" height="17" fill="#150458" />
    <rect x="21" y="5" width="4" height="7" fill="#150458" />
    <rect x="21" y="15" width="4" height="12" fill="#150458" />
    <rect x="7" y="18" width="4" height="1.5" fill="#E70488" />
    <rect x="21" y="13" width="4" height="1.5" fill="#FFCA00" />
  </svg>
);

const Fastapi = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" fill="#009688" />
    <path d="M18 5 9.5 17H15l-1 10 8.5-13H17l1-9Z" fill="white" />
  </svg>
);

const Redis = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path d="M5 20.5 16 15l11 5.5L16 26 5 20.5Z" fill="#A41E11" />
    <path d="M5 15.5 16 10l11 5.5L16 21 5 15.5Z" fill="#D82C20" />
    <path d="M5 10.5 16 5l11 5.5L16 16 5 10.5Z" fill="#F44336" />
    <path d="M12 10h8M11 13h10" stroke="white" strokeWidth="1.5" />
  </svg>
);

const Javascript = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <rect x="4" y="4" width="24" height="24" rx="2" fill="#F7DF1E" />
    <path
      d="M12.5 22.8c.5.8 1.1 1.4 2.3 1.4 1 0 1.7-.5 1.7-1.3v-8.2h2.6V23c0 2.7-1.6 3.9-4 3.9-2.1 0-3.4-1.1-4-2.4l1.4-1.7Zm8.1-.3c.7 1.1 1.6 1.8 3.1 1.8 1.3 0 2.1-.6 2.1-1.5 0-1-.8-1.4-2.3-2l-.8-.3c-2.3-1-3.8-2.2-3.8-4.7 0-2.4 1.8-4.2 4.6-4.2 2 0 3.4.7 4.5 2.5l-2.1 1.3c-.6-1-1.2-1.4-2.4-1.4-1.1 0-1.8.7-1.8 1.5 0 1.1.7 1.5 2.2 2.1l.8.3c2.7 1.2 4.2 2.3 4.2 5 0 2.8-2.2 4.4-5.2 4.4-2.9 0-4.8-1.4-5.7-3.2l2.4-1.6Z"
      fill="#111"
    />
  </svg>
);

const Sql = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <ellipse cx="16" cy="8" rx="10" ry="4" fill="#64748B" />
    <path d="M6 8v12c0 2.2 4.5 4 10 4s10-1.8 10-4V8" fill="#94A3B8" />
    <path d="M6 14c0 2.2 4.5 4 10 4s10-1.8 10-4" stroke="#F8FAFC" />
    <path d="M6 20c0 2.2 4.5 4 10 4s10-1.8 10-4" stroke="#F8FAFC" />
  </svg>
);

const Tensorflow = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path d="M16 3 27 9.3v5.1l-7-4v17.2L16 30V3Z" fill="#FF6F00" />
    <path d="M16 3 5 9.3v5.1l7-4v17.2l4 2.4V3Z" fill="#FFB74D" />
    <path d="M18.5 11.8 27 16.7v4.8l-8.5-4.9v-4.8Z" fill="#FFA000" />
  </svg>
);

const TailwindCss = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path
      d="M16 8c-4.2 0-6.8 2.1-7.8 6.2 1.6-2.1 3.5-2.9 5.8-2.3 1.3.3 2.2 1.2 3.2 2.1 1.7 1.6 3.7 3.5 8 3.5 4.2 0 6.8-2.1 7.8-6.2-1.6 2.1-3.5 2.9-5.8 2.3-1.3-.3-2.2-1.2-3.2-2.1C22.3 9.9 20.3 8 16 8ZM8 15.5c-4.2 0-6.8 2.1-7.8 6.2 1.6-2.1 3.5-2.9 5.8-2.3 1.3.3 2.2 1.2 3.2 2.1 1.7 1.6 3.7 3.5 8 3.5 4.2 0 6.8-2.1 7.8-6.2-1.6 2.1-3.5 2.9-5.8 2.3-1.3-.3-2.2-1.2-3.2-2.1-1.7-1.6-3.7-3.5-8-3.5Z"
      fill="#38BDF8"
    />
  </svg>
);

const Threejs = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path d="M6 5 26 16 6 27V5Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M11 8.5v17M16 11.2v11.6M21 14v4" stroke="currentColor" strokeWidth="1.7" />
    <path d="M6 5 21 14 11 25.5M11 8.5 26 16 11 25.5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const Transformers = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" fill="#FFD166" />
    <circle cx="11.5" cy="14" r="1.8" fill="#4B5563" />
    <circle cx="20.5" cy="14" r="1.8" fill="#4B5563" />
    <path
      d="M11 20c1.4 1.4 3 2.1 5 2.1s3.6-.7 5-2.1"
      stroke="#4B5563"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7.5 19.5c-2.4-1-3.5-2.5-3-4 .4-1.2 1.8-1.5 3.4-.6M24.5 19.5c2.4-1 3.5-2.5 3-4-.4-1.2-1.8-1.5-3.4-.6"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export {
  Fastapi,
  Javascript,
  Numpy,
  Pandas,
  Pytorch,
  Redis,
  ScikitLearn,
  Sql,
  TailwindCss,
  Tensorflow,
  Threejs,
  Transformers,
};
