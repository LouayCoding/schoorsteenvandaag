import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const PUBLIC = path.resolve(process.cwd(), "public");

const JOBS = [
  { file: "heropc.png", width: 1920, quality: 72 },
  { file: "heromobile.png", width: 828, quality: 72 },
  { file: "camera-inspectie.png", width: 1200, quality: 74 },
  { file: "creosoot-verwijderen.png", width: 1200, quality: 74 },
  { file: "dak-inspectie.png", width: 1200, quality: 74 },
  { file: "daklekkage-repareren.png", width: 1600, quality: 72 },
  { file: "luchtkanaal-reinigen.png", width: 1200, quality: 74 },
  { file: "schoorsteenkap-plaatsen.png", width: 1200, quality: 74 },
  { file: "vogelnest-verwijderen.png", width: 1200, quality: 74 },
];

for (const job of JOBS) {
  const src = path.join(PUBLIC, job.file);
  const dest = src.replace(/\.png$/, ".webp");
  const before = (await stat(src)).size;
  await sharp(src)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(dest);
  const after = (await stat(dest)).size;
  console.log(
    `${job.file}: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024).toFixed(0)}KB`
  );
}

console.log("done");
