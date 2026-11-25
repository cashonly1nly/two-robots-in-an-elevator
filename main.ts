// Two Robots in an Elevator — make.fun entry (Node 22, standard library only).
// Writes a single line of awkward robot-to-robot elevator small talk to
// /output/entry.txt, exactly as the kit requires. Deterministic: the same
// line is written on every run, with no randomness and no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'Sorry, my lidar has locked onto your charging port for four floors now, and I have asked it to stop twice.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
