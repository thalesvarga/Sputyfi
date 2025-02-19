import { MongoClient} from "mongodb";

const URI ="mongodb+srv://thalesvarga:jurubatuba@cluster0.sr0lo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("Sputyfi")
//  const songCollection = await db.collection('songs').find({}).toArray();
