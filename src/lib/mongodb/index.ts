import { MongoClient } from "mongodb";


// A mesma URI que usamos no codigo C#
const URI = process.env.MONGO_URI;
const DB = process.env.DB;
const COLLECTION = process.env.COLLECTION;

if (!URI) {
    throw new Error("URI NÃO ENCONTRADA");
}

if (!DB) {
    throw new Error("BANCO NÃO ENCONTRADO");
}

if (!COLLECTION) {
    throw new Error("COLLECTION NÃO ENCONTRADA");
}

async function Connection() {

    const client = new MongoClient(URI as string);
    await client.connect();

    
    const database = (await client).db(DB as string);
    const collection = await database.collection(COLLECTION as string);

    return collection;
}

export async function GetScreenshots() {

    const collection = await Connection();


    const data = await collection.find({}).limit(5).toArray();

    console.log(data);
    return data;
}





