
import {QdrantClient} from '@qdrant/js-client-rest';

// // TO connect to Qdrant running locally
// const client = new QdrantClient({url: 'http://127.0.0.1:6333'});

// or connect to Qdrant Cloud
const client = new QdrantClient({
    url: process.env.URL,
    apiKey: process.env.API_KEY,
});

const result = await client.getCollections();
console.log('List of collections:', result.collections);

client.createCollection()