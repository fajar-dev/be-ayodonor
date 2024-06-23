import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'logs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('env').nullable()
      table.string('route').nullable()
      table.string('ip').nullable()
      table.string('browser').nullable()
      table.json('request').nullable()
      table.string('response_time').nullable()
      table.integer('response_code').nullable()
      table.json('response').nullable()
      table.timestamp('created_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
