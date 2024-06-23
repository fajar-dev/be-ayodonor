import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import BloodDonorUnit from './blood_donor_unit.js'
import { DateTime } from 'luxon'

export default class Schedule extends BaseModel {
  static get table() {
    return 'kegiatan'
  }

  static get connection() {
    return 'slave'
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare instansi: string

  @column()
  declare alamat: string

  @column.dateTime({ columnName: 'TglPenjadwalan', autoCreate: false, autoUpdate: false })
  declare TglPenjadwalan: DateTime

  @column()
  declare jumlah: number

  @column()
  declare lat: string

  @column()
  declare lng: string

  @column()
  declare udd: number

  @belongsTo(() => BloodDonorUnit, {
    foreignKey: 'udd',
  })
  declare bloodDonorUnit: BelongsTo<typeof BloodDonorUnit>
}
