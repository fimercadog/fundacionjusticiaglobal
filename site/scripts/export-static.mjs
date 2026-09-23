// Render the (fully static) home page from the built standalone server and
// write it plus the client assets to dist-static/ — a folder any static host
// can serve. ponytail: single-route site, so we fetch just "/".
import { spawn } from 'node:child_process';
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { setTimeout as sleep } from 'node:timers/promises';

const PORT = 4173;
const OUT = 'dist-static';

const server = spawn('node', ['dist/standalone/server.js'], {
  env: { ...process.env, PORT: String(PORT) },
  stdio: 'ignore',
});

try {
  let html;
  for (let i = 0; i < 30; i++) {
    await sleep(300);
    try {
      const res = await fetch(`http://localhost:${PORT}/`);
      if (res.ok) {
        html = await res.text();
        break;
      }
    } catch {
      // server not up yet
    }
  }
  if (!html) throw new Error('standalone server did not respond');

  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  await cp('dist/client', OUT, { recursive: true });
  await writeFile(`${OUT}/index.html`, html);
  console.log(`Wrote ${OUT}/index.html + assets`);
} finally {
  server.kill();
}
