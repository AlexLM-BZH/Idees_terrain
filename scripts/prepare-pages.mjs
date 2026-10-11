import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const candidates = ["dist/client", "dist", ".output/public", ".vercel/output/static"];

function findShell(dir, depth = 0) {
  if (depth > 3 || !existsSync(dir)) return null;
  if (existsSync(join(dir, "index.html")) || existsSync(join(dir, "_shell.html"))) return dir;
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".git" || name === "site") continue;
    const path = join(dir, name);
    if (!statSync(path).isDirectory()) continue;
    const found = findShell(path, depth + 1);
    if (found) return found;
  }
  return null;
}

const source =
  candidates.find((dir) => existsSync(join(dir, "index.html")) || existsSync(join(dir, "_shell.html"))) ??
  findShell(".");
if (!source) {
  console.error("Aucun index.html après le build.");
  process.exit(1);
}

rmSync("site", { recursive: true, force: true });
mkdirSync("site", { recursive: true });
cpSync(source, "site", { recursive: true });
if (!existsSync(join("site", "index.html")) && existsSync(join("site", "_shell.html"))) {
  cpSync(join("site", "_shell.html"), join("site", "index.html"));
}
cpSync(join("site", "index.html"), join("site", "404.html"));
writeFileSync(join("site", ".nojekyll"), "");
console.log(`Site statique prêt dans site/ (depuis ${source}).`);
