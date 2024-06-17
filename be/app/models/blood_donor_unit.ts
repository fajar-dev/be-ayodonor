import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
// import News from './news.js'
// import { HasMany } from '@adonisjs/lucid/types/relations'

export default class BloodDonorUnit extends BaseModel {
  static get table() {
    return 'udd'
  }

  static get connection() {
    return 'master'
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

  // @hasMany(() => News, {
  //   foreignKey: 'udd', // Define the foreign key for the relationship
  // })
  // declare news: HasMany <typeof News>
}
