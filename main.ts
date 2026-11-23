// SPDX-License-Identifier: MIT
// Ember Joke Demo 23 November — a one-line joke about working beside AI
// coding agents, written for the make.fun bounty
// "the-joke-about-the-demo-20261123-0112".
//
// The joke is built from three beats: the apology, the fix, and the
// too-polite undo, so the punchline lands on the agent's manners,
// not on the bug itself.

import { mkdirSync, writeFileSync } from "node:fs";

const SETUP =
  "During the demo, my AI coding agent apologised for the bug, fixed it,";
const PUNCHLINE =
  "apologised for the fix, then reintroduced the bug out of politeness.";

const joke = `${SETUP} ${PUNCHLINE}`;

// The gate only accepts 1–280 characters of non-blank UTF-8 text, so
// refuse to write anything outside that window instead of submitting
// a file the scorer would throw away.
const characters = [...joke].length;
if (characters < 1 || characters > 280 || joke.trim().length === 0) {
  throw new Error(`joke is ${characters} characters, outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`${characters} characters written to /output/entry.txt`);
