import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { 
  ssr: false,
  loading: () => <div style={{ height: "300px" }} /> // placeholder while loading
});

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if (!isMounted) {
    return <div style={{ height: "300px" }} />; // placeholder before mount
  }

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
