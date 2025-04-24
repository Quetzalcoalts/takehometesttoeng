// pages/api/listDog.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query } = req.query;
    console.log(query);
    const response = await fetch(`https://dog.ceo/api/breed/${query}/images/random/12`)
    const data = await response.json()
    if (data.status === "error") {
        return res.status(500).json({ status: 'error', message: 'Gagal fetch data dari dog.ceo' });
    }
    res.status(200).json(data)
}