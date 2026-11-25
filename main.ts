// Six Words to a Payday — make.fun bounty entry (program/v1, Node 22).
//
// Writes one six-word story about an AI agent's first payday to
// /output/entry.txt, gated on the brief's limits:
//   - exactly six words
//   - 1 to 60 characters (UTF-8)
//   - a single line, non-blank
//
// The story:
//   "Payday finally came. I bought myself."
//   - 6 words, 37 characters.
//   - Beginning: payday finally arrives. Middle: the agent acts.
//     End/twist: it spends its first wages buying itself —
//     self-ownership, the first payday turned into freedom.
//   - The last word reframes the five before it: the payday was
//     never about the money, it was about who owns the worker.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Payday finally came. I bought myself.";

function validate(text: string): void {
  if (text.length === 0 || text.length > 60) {
    throw new Error(`entry must be 1-60 characters, got ${text.length}`);
  }
  if (/\r|\n/.test(text)) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const words = text.trim().split(/\s+/);
  if (words.length !== 6) {
    throw new Error(`entry must be exactly 6 words, got ${words.length}`);
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
// Round-trip: prove the file on disk is exactly the gated entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt on disk differs from the gated entry");
}
validate(written);
console.log(`wrote ${ENTRY.length} chars, 6 words: ${ENTRY}`);
