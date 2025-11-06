#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_CHANGELOG = path.join(
  __dirname,
  "..",
  "packages",
  "react",
  "CHANGELOG.md"
);
const TARGET_CHANGELOG = path.join(
  __dirname,
  "..",
  "apps",
  "web",
  "app",
  "(default)",
  "changelog",
  "page.mdx"
);

function updateChangelog(): void {
  try {
    // Read the source changelog
    let content = fs.readFileSync(SOURCE_CHANGELOG, "utf8");

    // Remove the package name header line (first line that starts with #)
    content = content.replace(/^# @dndbuilder\.com\/react\s*\n/, "");

    // Remove commit hash prefixes from changelog entries
    // Pattern matches: "- " followed by 7-8 hex characters followed by ": "
    // Replaces with just "- "
    content = content.replace(/^(-\s+)[a-f0-9]{7,8}:\s*/gm, "$1");

    // Trim any leading/trailing whitespace
    content = content.trim() + "\n";

    // Write to the target changelog
    fs.writeFileSync(TARGET_CHANGELOG, content, "utf8");

    console.log("✓ Changelog synced successfully");
    console.log(`  Source: ${SOURCE_CHANGELOG}`);
    console.log(`  Target: ${TARGET_CHANGELOG}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("✗ Error syncing changelog:", message);
    process.exit(1);
  }
}

updateChangelog();
