import { PropsWithChildren } from "react";

export default function StrategiesLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full max-w-7xl mx-auto pt-4 pb-10 px-0 sm:px-8">
      {children}
    </div>
  );
}
