import React from 'react';

const ShieldCheck = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.83248 5.49975L10.8708 3.15326C11.9134 2.66767 13.1036 2.66766 14.1462 3.15325L19.1646 5.49045C20.6321 6.17391 21.5953 7.71001 21.4925 9.38938C21.0981 15.831 19.3406 18.743 14.5899 22.1213C13.3361 23.0129 11.6823 23.0107 10.4276 22.1206C5.6914 18.7605 3.86871 15.8891 3.50617 9.36679C3.41343 7.69845 4.37515 6.17848 5.83248 5.49975ZM16.0644 11.283C16.3372 10.9712 16.3056 10.4974 15.9938 10.2246C15.6821 9.95188 15.2083 9.98347 14.9355 10.2952L12.0656 13.5751C11.9775 13.6758 11.8258 13.6893 11.7213 13.6057L9.96849 12.2034C9.64504 11.9447 9.17307 11.9971 8.91431 12.3206C8.65556 12.644 8.708 13.116 9.03145 13.3747L10.7843 14.777C11.5156 15.362 12.5778 15.2676 13.1945 14.5628L16.0644 11.283Z"
      fill={fill}
    />
  </svg>
);

export default ShieldCheck;
