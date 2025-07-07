import CustomLinkBlock from '@/components/blocks/link/link.preview';
import clientPromise from '@/lib/mongodb';
import { Block, BlockType, BuilderConfig } from '@dndbuilder.com/react';
import { RenderContent } from '@dndbuilder.com/react/components/server';
import '@dndbuilder.com/react/dist/style.css';

async function fetchContent(): Promise<Record<string, Block>> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  let content: Record<string, Block> = {};

  const response = await fetch(`${baseUrl}/api/builder-content`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store', // Ensure we always fetch the latest content
  });
  if (!response.ok) {
    throw new Error('Failed to fetch content.');
  }

  const data = await response.json();

  if (data.content && Object.keys(data.content).length > 0) {
    content = data.content;
  } else {
    // Fallback to an empty content object if no content is found
    console.warn('No content found, using empty content.');
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
      // CardConfig,
    ],
  };

  return <RenderContent content={content} builderConfig={builderConfig} />;
}
