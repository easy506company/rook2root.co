import { ReactNode } from "react";

type CaptionProps = {
  children?: ReactNode;
};

export default function Caption({ children }: CaptionProps) {
  if (!children) return null;
  return (
    <p style={{
      fontSize: "0.9em", color: "gray",
      marginTop: "0em", textAlign: "left"
    }}>
      {children}
    </p>
  );
}
