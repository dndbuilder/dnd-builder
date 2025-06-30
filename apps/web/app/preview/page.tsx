import clientPromise from "@/lib/mongodb";
import { Block, BlockType, BuilderConfig } from "@dndbuilder.com/react";
import { RenderContent } from "@dndbuilder.com/react/components/server";
import "@dndbuilder.com/react/dist/style.css";
import CustomLinkBlock from "../../components/blocks/link/link.preview";

async function fetchContent(): Promise<Record<string, Block>> {
  let content: Record<string, Block> = {};

  try {
    const client = await clientPromise;
    const db = client.db("pageBuilder");

    // Get the latest content
    const contentDoc = await db.collection("builderContent").findOne({}, { sort: { _id: -1 } });

    if (contentDoc && contentDoc.data) {
      content = contentDoc.data;
    }
  } catch (error) {
    console.error("Error fetching content from database:", error);
    // We can't access localStorage on the server side
    // The client-side fallback will be handled in a client component if needed
  }

  return content;
}

// This is a server component
export default async function PreviewPage() {
  // Fetch content from MongoDB using the utility function
  const content = await fetchContent();

  // Create a custom builder configuration that overrides the Link block
  const builderConfig: BuilderConfig = {
    blocks: [
      {
        type: BlockType.LINK,
        previewComponent: CustomLinkBlock,
      },
    ],
  };

  return (
    <>
      {/* Render the content with a custom builder configuration */}
      <RenderContent content={content} builderConfig={builderConfig} />
    </>
  );
}
