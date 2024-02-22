import React, { useState } from "react";
const ServicesNew = () => {
  const videos = ["/images/banner/branding.mp4"];

  const thumbnails = ["/images/others/1.png"];

  return (
    <>
      <video  autoplay="true" loop muted className="background-video">
                <source src="https://res.cloudinary.com/dq6ok3jsu/video/upload/v1701662576/branding_zzp9hp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
    </>
  );
};

export default ServicesNew;
