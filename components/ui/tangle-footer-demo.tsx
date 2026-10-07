"use client";

import { TangleFooter } from "@/components/ui/tangle-footer";

export default function TangleFooterDemo() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <TangleFooter
        lines={[
          "Custom software engineering built for operational scale and reliability.",
          "AI agents & process automation reducing manual business friction.",
          "Hisako · Technology That Moves Organizations Forward.",
        ]}
      />
    </div>
  );
}
