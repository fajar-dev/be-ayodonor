import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class BloodDonorUnit extends BaseModel {
  static get table() {
    return 'udd'
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama: string

  @column()
  declare alamat: string

  @column()
  declare provinsi: string

  @column()
  declare telp: string

  @column()
  declare lat: string

  @column()
  declare lng: string
}
