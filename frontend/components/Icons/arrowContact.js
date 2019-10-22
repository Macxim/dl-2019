import React from 'react';

const arrowContact = props => (
  <svg width={96} height={96} {...props}>
    <defs>
      <filter
        x="-78.1%"
        y="-78.1%"
        width="256.2%"
        height="256.2%"
        filterUnits="objectBoundingBox"
        id="prefix__a"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={12.5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <circle id="prefix__b" cx={24} cy={24} r={24} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(24 24)">
        <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
        <use fill="#FFF" xlinkHref="#prefix__b" />
      </g>
      <path
        d="M59.8 45.867L50.933 37v5.067C42.067 43.333 38.267 49.667 37 56c3.167-4.433 7.6-6.46 13.933-6.46v5.193l8.867-8.866z"
        fill="#090909"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default arrowContact;
