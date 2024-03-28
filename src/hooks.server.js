import { startMongo } from '$lib/data/mongo';

startMongo().then(() => {
	console.log('Mongo Connected');
});
