import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Stock extends BaseModel {
  static get table() {
    return 'stok_darah_all_udd'
  }

  static get connection() {
    return 'slave'
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare namaudd: string

  @column()
  declare provinsi: string

  @column({ columnName: 'gol_A' })
  declare gol_A: number | null

  @column({ columnName: 'gol_B' })
  declare gol_B: number | null

  @column({ columnName: 'gol_AB' })
  declare gol_AB: number | null

  @column({ columnName: 'gol_O' })
  declare gol_O: number | null
}
