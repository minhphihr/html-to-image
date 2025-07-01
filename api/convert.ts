// api/convert.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { html } = req.body;

  if (!html) {
    res.status(400).json({ error: 'Missing html in request body' });
    return;
  }

  // 这里你可以调用 html-to-image 的相关逻辑
  // 这里只做示例，返回收到的 html
  res.status(200).json({ message: 'Received HTML', html });
}
