import type { SVGProps } from "react";

const Cplusplus = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path d="M16 2 28 9v14L16 30 4 23V9L16 2Z" fill="#00599C" />
    <path d="M16 2 28 9v14L16 16V2Z" fill="#004482" />
    <path d="M20.5 12.5a6 6 0 1 0 0 7" stroke="white" strokeWidth="3" />
    <path d="M22 13.5v5M19.5 16h5M26 13.5v5M23.5 16h5" stroke="white" strokeWidth="1.2" />
  </svg>
);

const Rust = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="3" />
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" strokeDasharray="2.2 3.4" />
    <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="800" fill="currentColor">R</text>
  </svg>
);

const Numba = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path d="M16 2 28 9v14L16 30 4 23V9L16 2Z" fill="#00A3E0" />
    <path d="M16 2 28 9v14L16 16V2Z" fill="#0077B6" />
    <path d="M4 9 16 16v14L4 23V9Z" fill="#33C3D6" />
    <path d="M11 22V10l10 12V10" stroke="white" strokeWidth="2.4" strokeLinejoin="round" />
  </svg>
);

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
    <circle cx="11" cy="20" r="9" fill="#F89939" />
    <circle cx="22" cy="12" r="9" fill="#3499CD" />
    <path d="M14 15a4 4 0 0 1 4-4M14 15a4 4 0 0 0 4 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <circle cx="9" cy="23" r="1.6" fill="white" />
    <circle cx="25" cy="9" r="1.6" fill="white" />
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

const Aws = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <text x="16" y="17" textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">aws</text>
    <path d="M5 21.5c6 4 16 4 22 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
    <path d="m24 20.5 3.5 1-1 3.5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Azure = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path d="M13.5 5 4 27h7.5l5-13z" fill="#0078D4" />
    <path d="M15 6.5 28 27H12.5l7-7.5-4.5-5.5z" fill="#50A0E8" />
  </svg>
);

const Linux = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <ellipse cx="16" cy="18" rx="8" ry="10" fill="#1F2937" />
    <ellipse cx="16" cy="20" rx="5" ry="7" fill="#F3F4F6" />
    <circle cx="16" cy="8" r="5" fill="#1F2937" />
    <circle cx="14" cy="7.5" r="1.2" fill="white" />
    <circle cx="18" cy="7.5" r="1.2" fill="white" />
    <path d="M13.5 10c1.5-1 3.5-1 5 0l-2.5 2z" fill="#FBBF24" />
    <ellipse cx="11.5" cy="28" rx="4" ry="1.8" fill="#FBBF24" />
    <ellipse cx="20.5" cy="28" rx="4" ry="1.8" fill="#FBBF24" />
  </svg>
);

const Git = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <path d="M16 2 30 16 16 30 2 16Z" fill="#F05032" />
    <path d="M12 10.5v11M12 14c0 3 8 1 8 4.5" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="10.5" r="2.2" fill="white" />
    <circle cx="12" cy="21.5" r="2.2" fill="white" />
    <circle cx="20" cy="18.5" r="2.2" fill="white" />
  </svg>
);

export {
  Git,
  Aws,
  Azure,
  Linux,
  Cplusplus,
  Fastapi,
  Javascript,
  Numba,
  Numpy,
  Pandas,
  Pytorch,
  Redis,
  Rust,
  ScikitLearn,
  Sql,
  TailwindCss,
  Tensorflow,
  Threejs,
  Transformers,
};
