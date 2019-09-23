import * as React from "react";

interface ComingSoonProps {}

const ComingSoon: React.SFC<ComingSoonProps> = () => {
  return (
    <div
      className="flex flex-justify-center flex-align-items-center"
      style={{ height: "100%" }}
    >
      <h1>COMING SOON</h1>
    </div>
  );
};

export default ComingSoon;

// import React, { Component } from "react";

// export class ComingSoon extends Component {
//   render() {
//     return (
//       <div
//         className="flex flex-justify-center flex-align-items-center"
//         style={{ height: "100%" }}
//       >
//         <h1>COMING SOON</h1>
//       </div>
//     );
//   }
// }

// export default ComingSoon;
