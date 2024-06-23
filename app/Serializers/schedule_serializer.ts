import Schedule from '#models/schedule'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'
import { DateTime } from 'luxon'

interface ScheduleSerializerInterface {
  id: number
  instances: string
  address: string
  date: DateTime
  target: number
  latitude: string
  longitude: string
  maps: string
  bloodDonorUnit: object
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
  data: ScheduleSerializerInterface[]
}

export default class ScheduleSerializer {
  static single(data: Schedule): ScheduleSerializerInterface {
    return {
      id: data.id,
      instances: data.instansi,
      address: data.alamat,
      date: data.TglPenjadwalan,
      target: data.jumlah,
      latitude: data.lat,
      longitude: data.lng,
      maps: 'https://www.google.com/maps?q=' + data.lat + ',' + data.lng,
      bloodDonorUnit: {
        id: data.bloodDonorUnit.id,
        name: data.bloodDonorUnit.nama,
      },
    }
  }

  static collection(datas: ModelPaginatorContract<Schedule>): PaginatedResponse {
    return {
      meta: datas.getMeta(),
      data: datas.all().map((data: Schedule) => this.single(data)),
    }
  }
}
