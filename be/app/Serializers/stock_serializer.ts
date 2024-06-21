import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'
import Stock from '#models/stock'

interface StockSerializerInterface {
  id: number
  name: string
  province: string
  type: object
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
  data: StockSerializerInterface[]
}

export default class StockSerializer {
  static single(data: Stock): StockSerializerInterface {
    return {
      id: data.id,
      name: data.namaudd,
      province: data.provinsi,
      type: {
        a: data.gol_A,
        b: data.gol_B,
        ab: data.gol_AB,
        o: data.gol_O,
      },
    }
  }

  static collection(datas: ModelPaginatorContract<Stock>): PaginatedResponse {
    return {
      meta: datas.getMeta(),
      data: datas.all().map((data: Stock) => this.single(data)),
    }
  }
}
