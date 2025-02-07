import type { NextApiRequest, NextApiResponse } from "next";


export default async function Handler(
    req: NextApiRequest,
    res: NextApiResponse
) 
{

    return res.json({ message: "Hello World" });
}