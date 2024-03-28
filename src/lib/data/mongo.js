import { MongoClient } from 'mongodb';
// import MONGO_URL from '$env/static/private';

const MONGO_URL = 'mongodb://54.194.130.40:27017/test';

const client = new MongoClient(MONGO_URL);

export function startMongo() {
	console.log('Attempting to connect to MongoDB');
	return client.connect();
}

export default client.db();
