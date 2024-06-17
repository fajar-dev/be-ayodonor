// app/Serializers/PostSerializer.ts

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

  static collection(datas: News[]): NewsSerializerInterface[] {
    return datas.map((data) => this.single(data))
  }
}
