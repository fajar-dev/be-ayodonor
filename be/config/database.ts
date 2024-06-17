import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'mysql',
  connections: {
    master: {
      client: 'mysql2',
      connection: {
        host: env.get('DB_HOST_MASTER'),
        port: env.get('DB_PORT_MASTER'),
        user: env.get('DB_USER_MASTER'),
        password: env.get('DB_PASSWORD_MASTER'),
        database: env.get('DB_DATABASE_MASTER'),
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
    slave: {
      client: 'mysql2',
      connection: {
        host: env.get('DB_HOST_SLAVE'),
        port: env.get('DB_PORT_SLAVE'),
        user: env.get('DB_USER_SLAVE'),
        password: env.get('DB_PASSWORD_SLAVE'),
        database: env.get('DB_DATABASE_SLAVE'),
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
