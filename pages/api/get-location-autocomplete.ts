// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';

async function locationFetcher(text: string) {
  const raw = await fetch(
    `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${process.env.NEXT_PUBLIC_HEREJS_API_KEY}&query=${text}&beginHighlight=<b>&endHighlight=</b>`,
  );
  const json = await raw.json();

  return json;
}

// eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const searchText = req.query.search;
  const json = await locationFetcher(
    Array.isArray(searchText) ? searchText[0] : searchText,
  );
  res.status(200).json(json);
};
