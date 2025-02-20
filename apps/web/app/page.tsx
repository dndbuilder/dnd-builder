import React from "react";
import { Header } from "@repo/builder";
import { Button } from "@repo/builder";
import "@repo/builder/dist/index.css";

export default function HomePage() {
  return (
    <div>
      <Header text="Page Builder" />
      <Button>Click me</Button>
    </div>
  );
}
