import { env } from '@setlister/env/setlist-fm';
import express, { Request, Response } from 'express';
import type PQueueType from 'p-queue';
import { z } from 'zod';

const PQueue = require('./pqueue.module.js').default as typeof PQueueType;

const app = express();

const queue = new PQueue({
  concurrency: 1,
  interval: 1000,
  intervalCap: env.LIMIT_PER_SECOND,
});

// const throttle = throttledQueue(env.LIMIT_PER_SECOND, 1000);

const fetchRequest = async (url: string) => {
  return fetch(`https://api.setlist.fm${url}`, {
    method: 'GET',
    headers: {
      'x-api-key': env.SETLIST_FM_API_KEY,
      Accept: 'application/json',
    },
  });
};

app.get('/*', async (req: Request, res: Response) => {
  const priority = z.coerce
    .number()
    .default(0)
    .parse(req.headers['x-priority']);
  await queue.add(
    async () => {
      const response = await fetchRequest(req.url);
      res.send(await response.json());
    },
    {
      priority,
    }
  );
});

const port = env.PORT;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
