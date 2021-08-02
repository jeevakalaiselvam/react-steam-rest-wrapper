import React from "react";
import LoadingIcons from "react-loading-icons";

export default function Loading() {
  return (
    <div className='loading'>
      <h1 className='loadingInfo'>Please wait..</h1>
      <LoadingIcons.BallTriangle />
    </div>
  );
}
