import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Why did my phone go to therapy? It had too many unresolved notifications.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
