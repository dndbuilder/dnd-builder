"use client";

import "@repo/builder/dist/style.css";
import { BuilderProvider, store, Editor } from "@repo/builder";
import { Header } from "./_components/header";

export default function HomePage() {
  return (
    <div className="h-screen">
      {/* <Header text="Page Builder" />
      <Button>Click me</Button> */}
      <Header />
      <BuilderProvider store={store}>
        <Editor content={{}} />
      </BuilderProvider>
    </div>
  );
}
