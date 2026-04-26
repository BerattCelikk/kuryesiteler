"use client";
import { animated } from "@react-spring/web";
import { cn } from "@/lib/utils";
import { useTilt } from "@/hooks/useTilt";

interface Props {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export default function TiltCard({ children, className, maxTilt = 8, glare = true }: Props) {
  const { ref, styles, onMouseMove, onMouseLeave } = useTilt(maxTilt);
  return (
    <div ref={ref} className="perspective-1000" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <animated.div
        className={cn("relative preserve-3d will-change-transform", className)}
        style={{
          transform: styles.rotateX.to(
            (rx) => `rotateX(${rx}deg) rotateY(${styles.rotateY.get()}deg)`
          ),
        }}
      >
        {children}
        {glare && (
          <animated.div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              background: styles.glareX.to(
                (gx) =>
                  `radial-gradient(600px circle at ${gx}% ${styles.glareY.get()}%, rgba(255,255,255,0.10), transparent 40%)`
              ),
              mixBlendMode: "overlay",
            }}
          />
        )}
      </animated.div>
    </div>
  );
}
