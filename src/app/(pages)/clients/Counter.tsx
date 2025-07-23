"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

type CounterProps = {
  target: number;
  suffix?: string;
  prefix?: string;
};

const Counter = ({ target, suffix = "+", prefix }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: 2000,
    bounce: 0,
  });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(0);
      motionValue.set(target);
    } else {
      motionValue.set(0);
    }
  }, [isInView, motionValue, target]);

  return (
    <span ref={ref}>
      {prefix && <span>{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default Counter;