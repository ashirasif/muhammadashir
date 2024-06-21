"use client";
import { a, config, useSpring, useSpringValue } from "@react-spring/web";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function HomePage() {
  const hueRotation = useSpringValue(0, {
    config: {
      duration: 10000,
    },
  });

  const [bgPositionSpring, bgpositionApi] = useSpring(() => ({
    from: {
      backgroundPosition: "0% 0%",
    },
  }));

  const [textSpring, textSpringApi] = useSpring(() => ({
    from: { left: "-50vw" },
  }));

  useEffect(() => {
    textSpringApi.start({
      to: { left: "0" },
      delay: 1000,
      config: config.default,
    });
    hueRotation.start(360, {
      loop: true,
    });
    bgpositionApi.start({
      to: [
        {
          backgroundPosition: "100% 0%",
        },
        {
          backgroundPosition: "100% 100%",
        },
        {
          backgroundPosition: "0% 100%",
        },
        {
          backgroundPosition: "0% 0%",
        },
      ],
      loop: true,
      config: { duration: 2000 },
    });
  }, []);

  return (
    <a.div
      className="flex items-center justify-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/blueshit.jpg')",
        ...bgPositionSpring,
      }}
    >
      <a.div
        className={`flex h-screen w-full flex-col items-center backdrop-hue-rotate-[350deg] backdrop-contrast-200 justify-center bg-background/50 backdrop-blur-3xl backdrop-saturate-200`}
      >
        <div className="flex max-lg:flex-col-reverse items-end lg:items-center gap-2 lg:gap-4 p-2">
          <div className="overflow-hidden">
            <a.h1 style={textSpring} className="relative">
              Hello,
              <br />
              <span className="font-light">My name is</span>
              <br />
              Muhammad Ashir.
              <br />
              <span className="font-light">(i use vim btw)</span>
            </a.h1>
          </div>
            <Image
              height={300}
              width={500}
              src="/images/Black & White 1.png"
              alt="ashir"
              className="lg:-translate-y-10 max-lg:w-48 -translate-x-6 h-auto self-start"
            />
        </div>
        <p className="muted text-3xl font-light animate-pulse">Scroll Down &darr;</p>
      </a.div>
    </a.div>
  );
}
