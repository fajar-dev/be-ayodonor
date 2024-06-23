import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class StockProduct extends BaseModel {
  static get table() {
    return 'stokdarah'
  }

  static get connection() {
    return 'slave'
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare produk: string

  @column()
  declare produkKey: string

  @column()
  declare nama: string

  @column()
  declare aPos: number

  @column()
  declare bPos: number

  @column()
  declare oPos: number

  @column()
  declare abPos: number

  @column()
  declare aNeg: number

  @column()
  declare bNeg: number

  @column()
  declare oNeg: number

  @column()
  declare abNeg: number

  @column.dateTime({ autoCreate: false })
  declare updateOn: DateTime
}
