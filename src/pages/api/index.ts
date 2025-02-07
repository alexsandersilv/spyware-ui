import type { NextApiRequest, NextApiResponse } from "next";

import { GetScreenshots } from "@/lib/mongodb";


export default async function Handler(
    req: NextApiRequest,
    res: NextApiResponse
) 
{

    const data = await GetScreenshots();

    return res.json(data);
}