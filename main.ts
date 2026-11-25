// Robot Romance — entry program.
//
// The line was picked by an internal sparring tournament: two rival
// drafters wrote ten candidates each, a rival critic attacked all
// twenty and revised the top three, and the coordinator duel-tested
// the six finalists head-to-head under the kit judge's brief, in both
// orders, plus the strongest lines visible in the field. Full record:
// duel-test.md.
//
// The winning line talks straight to the household robot: a Roomba
// maps the house and bumps into things, and here the bumping is
// deliberate flirting — the one-word punch calls its game smooth.
//
// Verified: the program writes 65 characters (67 bytes, the em-dash
// is three bytes in UTF-8), no trailing newline, byte-identical
// across runs.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Roomba, you mapped the whole house just to bump into me — smooth.";

// The gate takes 1 to 200 characters; refuse to write anything outside
// it rather than ship an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
