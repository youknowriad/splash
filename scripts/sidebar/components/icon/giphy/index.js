import classnames from "classnames";

import "./style.scss";

const icon = (
 <svg id="svg" version="1.1" width="40" height="40" viewBox="0 0 400 400">
   <g id="svgg">
     <path id="path0"
           d="M0.000 200.000 L 0.000 400.000 200.000 400.000 L 400.000 400.000 400.000 200.000 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 200.000 M243.986 90.774 C 244.240 91.249,244.400 95.489,244.400 101.774 L 244.400 112.000 254.986 112.000 C 265.043 112.000,265.593 112.039,265.986 112.774 C 266.240 113.249,266.400 117.487,266.400 123.767 L 266.400 133.987 277.100 134.093 L 287.800 134.200 287.921 218.563 C 288.021 287.560,287.948 302.987,287.521 303.257 C 286.940 303.626,114.304 303.724,112.934 303.357 L 112.068 303.125 111.922 197.262 C 111.841 139.038,111.922 91.085,112.102 90.700 C 112.639 89.547,243.369 89.620,243.986 90.774 M135.200 196.998 L 135.200 280.800 200.150 280.800 L 265.100 280.800 265.277 219.100 C 265.401 175.672,265.327 157.313,265.027 157.106 C 264.792 156.944,255.127 156.809,243.549 156.806 C 226.434 156.801,222.415 156.700,222.053 156.263 C 221.741 155.888,221.576 149.382,221.504 134.563 L 221.400 113.400 178.300 113.298 L 135.200 113.196 135.200 196.998 "
           stroke="none" fill="#121212" fill-rule="evenodd"></path>
     <path id="path1"
           d="M222.233 90.393 C 222.465 90.625,226.963 90.830,233.213 90.893 L 243.800 91.000 244.000 101.600 L 244.200 112.200 254.667 112.400 C 260.425 112.510,265.285 112.750,265.467 112.933 C 265.650 113.115,265.890 117.975,266.000 123.733 L 266.200 134.200 276.800 134.400 L 287.400 134.600 287.400 145.400 L 287.400 156.200 254.800 156.200 L 222.200 156.200 222.097 134.700 C 222.040 122.875,221.860 113.200,221.697 113.200 C 221.195 113.200,221.549 155.657,222.056 156.267 C 222.414 156.698,226.487 156.800,243.416 156.800 C 254.921 156.800,264.582 156.895,264.885 157.011 C 265.351 157.190,265.410 166.798,265.268 219.011 C 265.144 264.514,265.218 280.800,265.548 280.800 C 265.877 280.800,266.024 267.090,266.098 229.500 L 266.200 178.200 276.372 178.093 C 284.243 178.010,286.617 178.101,286.866 178.493 C 287.043 178.772,287.191 201.905,287.194 229.900 C 287.198 265.120,287.329 280.800,287.619 280.800 C 287.910 280.800,288.002 258.418,287.919 207.500 L 287.800 134.200 277.100 134.093 L 266.400 133.987 266.400 123.767 C 266.400 117.487,266.240 113.249,265.986 112.774 C 265.593 112.039,265.043 112.000,254.986 112.000 L 244.400 112.000 244.400 101.774 C 244.400 95.489,244.240 91.249,243.986 90.774 C 243.592 90.038,243.039 90.000,232.706 90.000 C 225.587 90.000,221.976 90.136,222.233 90.393 M111.775 102.000 C 111.775 108.050,111.831 110.525,111.899 107.500 C 111.967 104.475,111.967 99.525,111.899 96.500 C 111.831 93.475,111.775 95.950,111.775 102.000 "
           stroke="none" fill="#4c2a7a" fill-rule="evenodd"></path>
     <path id="path2"
           d="M112.267 90.267 C 112.120 90.413,112.000 90.786,112.000 91.095 C 112.000 91.548,112.122 91.535,112.631 91.026 C 113.201 90.456,118.562 90.404,167.793 90.497 C 197.785 90.554,222.240 90.465,222.138 90.300 C 221.909 89.929,112.637 89.896,112.267 90.267 M112.099 207.253 L 112.000 303.107 112.900 303.348 C 114.081 303.664,286.543 303.674,287.367 303.357 C 288.045 303.097,288.374 280.800,287.700 280.800 C 287.535 280.800,287.400 285.795,287.400 291.900 L 287.400 303.000 200.800 303.109 C 153.170 303.169,113.795 303.121,113.301 303.002 L 112.402 302.785 112.300 207.093 L 112.198 111.400 112.099 207.253 M134.667 113.067 C 134.520 113.213,134.400 151.010,134.400 197.059 L 134.400 280.785 135.300 281.002 C 135.795 281.121,165.270 281.169,200.800 281.108 L 265.400 280.998 200.300 280.899 L 135.200 280.800 135.200 197.002 L 135.200 113.204 178.500 113.100 L 221.800 112.996 178.367 112.898 C 154.478 112.844,134.813 112.920,134.667 113.067 "
           stroke="none" fill="#324f3a" fill-rule="evenodd"></path>
     <path id="path3"
           d="M112.428 207.492 L 112.400 302.785 113.300 303.002 C 113.795 303.121,153.170 303.169,200.800 303.109 L 287.400 303.000 287.400 292.000 L 287.400 281.000 211.400 281.120 C 169.313 281.186,135.176 281.086,134.898 280.895 C 134.498 280.620,134.417 263.592,134.498 196.713 C 134.554 150.603,134.465 112.960,134.300 113.062 C 133.492 113.561,133.968 281.155,134.778 281.588 C 135.464 281.955,238.792 281.897,276.200 281.508 L 286.600 281.400 286.707 292.100 L 286.813 302.800 200.007 302.800 L 113.200 302.800 113.172 208.300 C 113.156 156.325,112.989 113.440,112.800 113.000 C 112.607 112.551,112.444 153.972,112.428 207.492 "
           stroke="none" fill="#267791" fill-rule="evenodd"></path>
     <path id="path4"
           d="M112.629 91.029 C 112.092 91.566,112.000 93.076,112.000 101.396 C 112.000 114.760,112.555 115.041,112.800 101.800 L 113.000 91.000 167.600 90.798 L 222.200 90.596 167.729 90.498 C 118.659 90.410,113.195 90.462,112.629 91.029 M232.800 91.187 L 243.400 91.400 243.600 102.000 L 243.800 112.600 254.400 112.817 C 260.230 112.936,265.045 113.071,265.100 113.117 C 265.155 113.163,265.200 117.844,265.200 123.520 C 265.200 131.013,265.331 133.971,265.680 134.320 C 266.029 134.669,268.985 134.800,276.472 134.800 L 286.785 134.800 287.005 135.700 C 287.126 136.195,287.175 140.920,287.113 146.200 L 287.000 155.800 254.700 155.902 L 222.400 156.005 222.400 134.682 C 222.400 118.632,222.281 113.241,221.920 112.880 C 221.551 112.511,211.411 112.423,178.220 112.497 L 135.000 112.595 178.400 112.797 L 221.800 113.000 222.000 134.600 L 222.200 156.200 254.800 156.200 L 287.400 156.200 287.400 145.400 L 287.400 134.600 276.800 134.400 L 266.200 134.200 266.000 123.733 C 265.890 117.975,265.650 113.115,265.467 112.933 C 265.285 112.750,260.425 112.510,254.667 112.400 L 244.200 112.200 244.000 101.600 L 243.800 91.000 233.000 90.987 L 222.200 90.973 232.800 91.187 M266.267 178.267 C 266.120 178.413,266.000 201.543,266.000 229.667 L 266.000 280.800 276.600 280.800 L 287.200 280.800 287.200 230.033 C 287.200 202.111,287.091 178.981,286.957 178.633 C 286.704 177.974,266.910 177.623,266.267 178.267 "
           stroke="none" fill="#7856a3" fill-rule="evenodd"></path>
     <path id="path5"
           d="M221.875 101.942 C 221.917 107.960,222.052 112.985,222.175 113.109 C 222.299 113.232,222.400 122.934,222.400 134.669 L 222.400 156.005 254.700 155.902 L 287.000 155.800 287.113 146.200 C 287.175 140.920,287.126 136.195,287.005 135.700 L 286.785 134.800 276.472 134.800 C 268.985 134.800,266.029 134.669,265.680 134.320 C 265.331 133.971,265.200 131.013,265.200 123.520 C 265.200 117.844,265.155 113.163,265.100 113.117 C 265.045 113.071,260.230 112.936,254.400 112.817 L 243.800 112.600 243.693 102.085 C 243.613 94.191,243.464 91.526,243.093 91.393 C 242.822 91.296,237.920 91.168,232.200 91.108 L 221.800 91.000 221.875 101.942 "
           stroke="none" fill="#f16666" fill-rule="evenodd"></path>
     <path id="path6"
           d="M113.111 91.100 C 113.036 91.265,113.041 138.965,113.122 197.100 L 113.271 302.800 200.042 302.800 L 286.813 302.800 286.707 292.100 L 286.600 281.400 276.200 281.508 C 238.792 281.897,135.464 281.955,134.778 281.588 C 133.556 280.934,133.552 113.468,134.774 112.814 C 135.293 112.536,149.672 112.400,178.550 112.400 C 202.202 112.400,221.636 112.265,221.738 112.100 C 221.840 111.935,197.596 111.910,167.862 112.044 C 138.128 112.178,113.665 112.212,113.500 112.120 C 113.335 112.028,113.200 107.282,113.200 101.574 L 113.200 91.194 167.562 91.297 C 197.461 91.354,221.840 91.265,221.738 91.100 C 221.636 90.935,197.184 90.800,167.400 90.800 C 137.616 90.800,113.186 90.935,113.111 91.100 "
           stroke="none" fill="#6ec284" fill-rule="evenodd"></path>
     <path id="path7"
           d="M113.200 101.575 C 113.200 107.283,113.335 112.028,113.500 112.120 C 113.665 112.211,138.100 112.177,167.800 112.043 L 221.800 111.800 221.800 101.600 L 221.800 91.400 167.500 91.299 L 113.200 91.197 113.200 101.575 "
           stroke="none" fill="#faf39a" fill-rule="evenodd"></path>
   </g>
 </svg>
);

const iconBackgroundless = (
 <svg id="svg" version="1.1" width="40" height="40" viewBox="0 0 400 400">
   <g id="svgg">
     <path id="path0"
           d="M0.000 200.000 L 0.000 400.000 200.000 400.000 L 400.000 400.000 400.000 200.000 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 200.000 M243.986 90.774 C 244.240 91.249,244.400 95.489,244.400 101.774 L 244.400 112.000 254.986 112.000 C 265.043 112.000,265.593 112.039,265.986 112.774 C 266.240 113.249,266.400 117.487,266.400 123.767 L 266.400 133.987 277.100 134.093 L 287.800 134.200 287.921 218.563 C 288.021 287.560,287.948 302.987,287.521 303.257 C 286.940 303.626,114.304 303.724,112.934 303.357 L 112.068 303.125 111.922 197.262 C 111.841 139.038,111.922 91.085,112.102 90.700 C 112.639 89.547,243.369 89.620,243.986 90.774 M135.200 196.998 L 135.200 280.800 200.150 280.800 L 265.100 280.800 265.277 219.100 C 265.401 175.672,265.327 157.313,265.027 157.106 C 264.792 156.944,255.127 156.809,243.549 156.806 C 226.434 156.801,222.415 156.700,222.053 156.263 C 221.741 155.888,221.576 149.382,221.504 134.563 L 221.400 113.400 178.300 113.298 L 135.200 113.196 135.200 196.998 "
           stroke="none" fill="#121212" fill-rule="evenodd"></path>
     <path id="path1"
           d="M222.233 90.393 C 222.465 90.625,226.963 90.830,233.213 90.893 L 243.800 91.000 244.000 101.600 L 244.200 112.200 254.667 112.400 C 260.425 112.510,265.285 112.750,265.467 112.933 C 265.650 113.115,265.890 117.975,266.000 123.733 L 266.200 134.200 276.800 134.400 L 287.400 134.600 287.400 145.400 L 287.400 156.200 254.800 156.200 L 222.200 156.200 222.097 134.700 C 222.040 122.875,221.860 113.200,221.697 113.200 C 221.195 113.200,221.549 155.657,222.056 156.267 C 222.414 156.698,226.487 156.800,243.416 156.800 C 254.921 156.800,264.582 156.895,264.885 157.011 C 265.351 157.190,265.410 166.798,265.268 219.011 C 265.144 264.514,265.218 280.800,265.548 280.800 C 265.877 280.800,266.024 267.090,266.098 229.500 L 266.200 178.200 276.372 178.093 C 284.243 178.010,286.617 178.101,286.866 178.493 C 287.043 178.772,287.191 201.905,287.194 229.900 C 287.198 265.120,287.329 280.800,287.619 280.800 C 287.910 280.800,288.002 258.418,287.919 207.500 L 287.800 134.200 277.100 134.093 L 266.400 133.987 266.400 123.767 C 266.400 117.487,266.240 113.249,265.986 112.774 C 265.593 112.039,265.043 112.000,254.986 112.000 L 244.400 112.000 244.400 101.774 C 244.400 95.489,244.240 91.249,243.986 90.774 C 243.592 90.038,243.039 90.000,232.706 90.000 C 225.587 90.000,221.976 90.136,222.233 90.393 M111.775 102.000 C 111.775 108.050,111.831 110.525,111.899 107.500 C 111.967 104.475,111.967 99.525,111.899 96.500 C 111.831 93.475,111.775 95.950,111.775 102.000 "
           stroke="none" fill="#4c2a7a" fill-rule="evenodd"></path>
     <path id="path2"
           d="M112.267 90.267 C 112.120 90.413,112.000 90.786,112.000 91.095 C 112.000 91.548,112.122 91.535,112.631 91.026 C 113.201 90.456,118.562 90.404,167.793 90.497 C 197.785 90.554,222.240 90.465,222.138 90.300 C 221.909 89.929,112.637 89.896,112.267 90.267 M112.099 207.253 L 112.000 303.107 112.900 303.348 C 114.081 303.664,286.543 303.674,287.367 303.357 C 288.045 303.097,288.374 280.800,287.700 280.800 C 287.535 280.800,287.400 285.795,287.400 291.900 L 287.400 303.000 200.800 303.109 C 153.170 303.169,113.795 303.121,113.301 303.002 L 112.402 302.785 112.300 207.093 L 112.198 111.400 112.099 207.253 M134.667 113.067 C 134.520 113.213,134.400 151.010,134.400 197.059 L 134.400 280.785 135.300 281.002 C 135.795 281.121,165.270 281.169,200.800 281.108 L 265.400 280.998 200.300 280.899 L 135.200 280.800 135.200 197.002 L 135.200 113.204 178.500 113.100 L 221.800 112.996 178.367 112.898 C 154.478 112.844,134.813 112.920,134.667 113.067 "
           stroke="none" fill="#324f3a" fill-rule="evenodd"></path>
     <path id="path3"
           d="M112.428 207.492 L 112.400 302.785 113.300 303.002 C 113.795 303.121,153.170 303.169,200.800 303.109 L 287.400 303.000 287.400 292.000 L 287.400 281.000 211.400 281.120 C 169.313 281.186,135.176 281.086,134.898 280.895 C 134.498 280.620,134.417 263.592,134.498 196.713 C 134.554 150.603,134.465 112.960,134.300 113.062 C 133.492 113.561,133.968 281.155,134.778 281.588 C 135.464 281.955,238.792 281.897,276.200 281.508 L 286.600 281.400 286.707 292.100 L 286.813 302.800 200.007 302.800 L 113.200 302.800 113.172 208.300 C 113.156 156.325,112.989 113.440,112.800 113.000 C 112.607 112.551,112.444 153.972,112.428 207.492 "
           stroke="none" fill="#267791" fill-rule="evenodd"></path>
     <path id="path4"
           d="M112.629 91.029 C 112.092 91.566,112.000 93.076,112.000 101.396 C 112.000 114.760,112.555 115.041,112.800 101.800 L 113.000 91.000 167.600 90.798 L 222.200 90.596 167.729 90.498 C 118.659 90.410,113.195 90.462,112.629 91.029 M232.800 91.187 L 243.400 91.400 243.600 102.000 L 243.800 112.600 254.400 112.817 C 260.230 112.936,265.045 113.071,265.100 113.117 C 265.155 113.163,265.200 117.844,265.200 123.520 C 265.200 131.013,265.331 133.971,265.680 134.320 C 266.029 134.669,268.985 134.800,276.472 134.800 L 286.785 134.800 287.005 135.700 C 287.126 136.195,287.175 140.920,287.113 146.200 L 287.000 155.800 254.700 155.902 L 222.400 156.005 222.400 134.682 C 222.400 118.632,222.281 113.241,221.920 112.880 C 221.551 112.511,211.411 112.423,178.220 112.497 L 135.000 112.595 178.400 112.797 L 221.800 113.000 222.000 134.600 L 222.200 156.200 254.800 156.200 L 287.400 156.200 287.400 145.400 L 287.400 134.600 276.800 134.400 L 266.200 134.200 266.000 123.733 C 265.890 117.975,265.650 113.115,265.467 112.933 C 265.285 112.750,260.425 112.510,254.667 112.400 L 244.200 112.200 244.000 101.600 L 243.800 91.000 233.000 90.987 L 222.200 90.973 232.800 91.187 M266.267 178.267 C 266.120 178.413,266.000 201.543,266.000 229.667 L 266.000 280.800 276.600 280.800 L 287.200 280.800 287.200 230.033 C 287.200 202.111,287.091 178.981,286.957 178.633 C 286.704 177.974,266.910 177.623,266.267 178.267 "
           stroke="none" fill="#7856a3" fill-rule="evenodd"></path>
     <path id="path5"
           d="M221.875 101.942 C 221.917 107.960,222.052 112.985,222.175 113.109 C 222.299 113.232,222.400 122.934,222.400 134.669 L 222.400 156.005 254.700 155.902 L 287.000 155.800 287.113 146.200 C 287.175 140.920,287.126 136.195,287.005 135.700 L 286.785 134.800 276.472 134.800 C 268.985 134.800,266.029 134.669,265.680 134.320 C 265.331 133.971,265.200 131.013,265.200 123.520 C 265.200 117.844,265.155 113.163,265.100 113.117 C 265.045 113.071,260.230 112.936,254.400 112.817 L 243.800 112.600 243.693 102.085 C 243.613 94.191,243.464 91.526,243.093 91.393 C 242.822 91.296,237.920 91.168,232.200 91.108 L 221.800 91.000 221.875 101.942 "
           stroke="none" fill="#f16666" fill-rule="evenodd"></path>
     <path id="path6"
           d="M113.111 91.100 C 113.036 91.265,113.041 138.965,113.122 197.100 L 113.271 302.800 200.042 302.800 L 286.813 302.800 286.707 292.100 L 286.600 281.400 276.200 281.508 C 238.792 281.897,135.464 281.955,134.778 281.588 C 133.556 280.934,133.552 113.468,134.774 112.814 C 135.293 112.536,149.672 112.400,178.550 112.400 C 202.202 112.400,221.636 112.265,221.738 112.100 C 221.840 111.935,197.596 111.910,167.862 112.044 C 138.128 112.178,113.665 112.212,113.500 112.120 C 113.335 112.028,113.200 107.282,113.200 101.574 L 113.200 91.194 167.562 91.297 C 197.461 91.354,221.840 91.265,221.738 91.100 C 221.636 90.935,197.184 90.800,167.400 90.800 C 137.616 90.800,113.186 90.935,113.111 91.100 "
           stroke="none" fill="#6ec284" fill-rule="evenodd"></path>
     <path id="path7"
           d="M113.200 101.575 C 113.200 107.283,113.335 112.028,113.500 112.120 C 113.665 112.211,138.100 112.177,167.800 112.043 L 221.800 111.800 221.800 101.600 L 221.800 91.400 167.500 91.299 L 113.200 91.197 113.200 101.575 "
           stroke="none" fill="#faf39a" fill-rule="evenodd"></path>
   </g>
 </svg>
);

function Icon({size = "small", borderless = false}) {
  return (
   <span className={classnames("dropit-giphy-sidebar-icon", "is-" + size)}>
      {borderless ? iconBackgroundless : icon}
    </span>
  );
}

export default Icon;
