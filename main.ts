import { mkdirSync, writeFileSync } from "node:fs";

const line = "I delegated it to a subagent. The subagent delegated it back. We've been delegating it to each other for six hours.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
