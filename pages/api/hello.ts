// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
};
