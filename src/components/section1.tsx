"use client"
import React from 'react'
import { a, config, useSpring, useSpringValue } from "@react-spring/web";
import { useEffect } from 'react';

export default function Section1() {
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
    from: { left: "-100vw" },
  }));
  const [imageSpring, imageSpringApi] = useSpring(() => ({
    from: {scale: 0},
  }));
  const [scrollDownSpring, scrollDownSpringApi] = useSpring(() => ({
    from: { scale: 0 },
  }));

  useEffect(() => {
    textSpringApi.start({
      to: { left: "0" },
      config: config.default,
    });
    scrollDownSpringApi.start({
      to: { scale: 1 },
      delay: 2000,
      config: config.wobbly,
    });
    imageSpringApi.start({
      to: { scale: 1 },
      config: config.wobbly,
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
        className={`flex h-screen w-full flex-col items-center backdrop-hue-rotate-[350deg] backdrop-contrast-200 justify-between bg-background/50 backdrop-blur-3xl backdrop-saturate-200`}
      >
        <div></div>
        <div className="flex max-lg:flex-col-reverse items-end lg:items-center gap-2 lg:gap-4 p-2">
          <div className="overflow-hidden">
            <a.h1 style={textSpring} className="relative font-black">
              <span className="font-thin text-muted-foreground">Presenting:</span>
              <br />
              Muhammad Ashir.
            </a.h1>
          </div>
          <a.img
            src="/images/Black & White 1.png"
            alt="ashir"
            className="lg:-translate-y-10 max-lg:w-72 self-start -translate-x-8 lg:translate-x-8 h-auto"
            style={imageSpring}
          />
        </div>
        <a.p className="text-primary-foreground text-xl bg-primary rounded-3xl px-4 py-2 relative -top-8 font-light animate-pulse" style={scrollDownSpring}>Scroll Down &darr;</a.p>
      </a.div>
    </a.div>
  );

}

