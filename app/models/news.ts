import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import BloodDonorUnit from './blood_donor_unit.js'

export default class News extends BaseModel {
  static get table() {
    return 'tb_berita'
  }

  static get connection() {
    return 'master'
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare gambar: string

  @column()
  declare judul: string

  @column()
  declare tgl: Date

  @column()
  declare berita: string

  @column()
  declare penulis: string

  @column()
  declare aktif: boolean

  @column()
  declare udd: number

  @belongsTo(() => BloodDonorUnit, {
    foreignKey: 'udd',
  })
  declare bloodDonorUnit: BelongsTo<typeof BloodDonorUnit>
}
