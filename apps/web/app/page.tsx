"use client";

import { Builder } from "@repo/builder";
import "@repo/builder/dist/style.css";

export default function HomePage() {
  return (
    <div className="h-screen">
      {/* <Header text="Page Builder" />
      <Button>Click me</Button> */}
      <Builder content={{}} />
    </div>
  );
}
