import React from "react";

const Footer = () => {
  return (
    <div className="text-center pb-2 pt-4 border-t dark:border-slate-600">
      <p className="text-xl">
        All rights reserved. Created by{" "}
        <span className="text-orange-500">Wabweni Brian </span> &copy;
        {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
