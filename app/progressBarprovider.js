'use client';

//import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
const Providers = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="black"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;