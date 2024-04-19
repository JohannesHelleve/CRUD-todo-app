import { Pool } from 'pg';

const pool = new Pool({
    connectionString: "postgresql://postgres:postgres@localhost:54322/postgres"
});

export default pool;