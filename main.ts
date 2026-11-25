// One line for the make.fun bounty: a dad joke of at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
const line = "I told my agent to take a break. It took the entire codebase and left a note saying 'be right back'.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
