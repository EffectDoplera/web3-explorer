import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './shared/database/schema.ts',
  out: './shared/database/migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DB_CONNECTION_URL ?? 'file:./dev.db',
    // TODO: add dotenv
    // authToken: process.env.DB_CONNECTION_TOKEN ?? '',
  },
})
