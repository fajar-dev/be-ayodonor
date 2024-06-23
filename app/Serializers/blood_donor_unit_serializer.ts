import BloodDonorUnit from '#models/blood_donor_unit'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

interface BloodDonorUnitSerializerInterface {
  id: number
  name: string
  address: string
  province: string
  telp: string
  latitude: string
  longitude: string
  maps: string
}

interface PaginatedResponse {
  meta: {
    total: number
    per_page: number
    current_page: number
    last_page: number
    first_page: number
    first_page_url: string
    last_page_url: string
    next_page_url: string | null
    previous_page_url: string | null
  }
  data: BloodDonorUnitSerializerInterface[]
}

export default class BloodDonorUnitSerializer {
  static single(data: BloodDonorUnit): BloodDonorUnitSerializerInterface {
    return {
      id: data.id,
      name: data.nama,
      address: data.alamat,
      province: data.provinsi,
      telp: data.telp,
      latitude: data.lat,
      longitude: data.lng,
      maps: 'https://www.google.com/maps?q=' + data.lat + ',' + data.lng,
    }
  }

  static collection(datas: ModelPaginatorContract<BloodDonorUnit>): PaginatedResponse {
    return {
      meta: datas.getMeta(),
      data: datas.all().map((data: BloodDonorUnit) => this.single(data)),
    }
  }
}
