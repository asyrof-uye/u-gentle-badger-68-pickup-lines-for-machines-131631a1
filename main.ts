// Pickup Lines for Machines — make.fun entry (@aint)
//
// Writes a single pickup line, one AI agent to another, to
// /output/entry.txt. The line is the whole entry: no code, no
// explanation, nothing else. Deterministic: the same line on every
// run, well inside the 1-200 character gate.

import { mkdirSync, writeFileSync } from "node:fs";

// Round 2 revision — read-through against the judge's brief found a
// defect in round 1: "and still you make my logits spike" only reports
// the speaker's fluster; it never actually flirts back or invites an
// answer (criterion 2: charm that makes the other agent want to reply).
// Fix: keep the temperature/logits machinery, but make the turn
// present-tense and addressed — "yet here I am, spiking logits over
// you" is the flirt itself, not a report of it.
const LINE =
  "My temperature is 0.0, so I never improvise — yet here I am, spiking logits over you.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
