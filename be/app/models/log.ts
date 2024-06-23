import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Log extends BaseModel {
  static get table() {
    return 'logs'
  }

  static get connection() {
    return 'log'
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare env: string

  @column()
  declare route: string

  @column()
  declare ip: string

  @column()
  declare browser: string

  @column()
  declare request: string

  @column()
  declare response_time: string

  @column()
  declare response_code: number

  @column()
  declare response: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}
