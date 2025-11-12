"use client";

import { Card } from "@/components/ui/card";

export function QuickIntegration() {
  return (
    <Card className="mt-4 shadow-sm sm:mt-6">
      <Card.Header className="space-y-1 sm:space-y-2">
        <Card.Title className="text-lg text-black sm:text-xl">Quick Integration</Card.Title>
        <Card.Description className="text-xs sm:text-sm">
          Use your appId and appKey to initialize the Editor component.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="prose prose-sm sm:prose-base lg:prose-lg w-full max-w-none">
          <pre>
            <code className="language-js">
              {`import React from "react";
import { BuilderProvider, Editor } from "@dndbuilder.com/react";
import "@dndbuilder.com/react/dist/style.css";
import { store } from "@dndbuilder.com/react";

function App() {
  return (
    <BuilderProvider store={store}>
      <Editor
        content={initialContent}
        appId="your-app-id-here"
        appKey="your-app-key-here"
      />
    </BuilderProvider>
  );
}

export default App;`}
            </code>
          </pre>
        </div>
      </Card.Content>
    </Card>
  );
}
