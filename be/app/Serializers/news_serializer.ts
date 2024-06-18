import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'
import News from '#models/news'

interface NewsSerializerInterface {
  id: number
  title: string
  content: string
  image: string
  date: Date
  author: string
  isActive: boolean
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
  data: NewsSerializerInterface[]
}

export default class NewsSerializer {
  static single(data: News): NewsSerializerInterface {
    return {
      id: data.id,
      title: data.judul,
      content: data.berita,
      image: 'https://dbdonor.pmi.or.id/pmi/berita/' + data.gambar,
      date: data.tgl,
      author: data.penulis,
      isActive: data.aktif ? true : false,
      bloodDonorUnit: {
        id: data.bloodDonorUnit.id,
        name: data.bloodDonorUnit.nama,
      },
    }
  }

  static collection(datas: ModelPaginatorContract<News>): PaginatedResponse {
    return {
      meta: datas.getMeta(),
      data: datas.all().map((data: News) => this.single(data)),
    }
  }
}
