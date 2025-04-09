import { createClient } from 'redis';

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';


const cache = createClient({
    url: REDIS_URL,
});

export default cache;