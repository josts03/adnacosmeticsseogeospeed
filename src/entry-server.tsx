/**
 * Server entry za build-time prerendering (SSG).
 * Uporablja ga scripts/prerender.mjs — ni del client bundla.
 */
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';

export interface RenderResult {
  html: string;
}

export function render(url: string): Promise<RenderResult> {
  return new Promise((resolve, reject) => {
    const stream = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        // Počakamo, da se razrešijo vsi lazy() chunki — šele nato zapišemo HTML.
        onAllReady() {
          const chunks: Buffer[] = [];
          const writable = new Writable({
            write(chunk, _enc, cb) {
              chunks.push(Buffer.from(chunk));
              cb();
            },
            final(cb) {
              resolve({ html: Buffer.concat(chunks).toString('utf-8') });
              cb();
            },
          });
          stream.pipe(writable);
        },
        onError(err) {
          reject(err);
        },
      },
    );
  });
}
