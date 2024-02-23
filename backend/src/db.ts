import { Pool } from 'pg';

const pool = new Pool({
    connectionString: "postgresql://postgres:postgres@localhost:5432/postgres"
});

export default pool;