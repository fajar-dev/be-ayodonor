import type { HttpContext } from '@adonisjs/core/http'
import News from '#models/news'
import ApiResponse from '../Helpers/ApiResponse.js'
import NewsSerializer from '../Serializers/news_serializer.js'

export default class NewsController {
  async index({ response, request }: HttpContext) {
    const q = request.input('q', '')
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const data = await News.query()
      .where('aktif', true)
      .where('judul', 'LIKE', `%${q}%`)
      .preload('bloodDonorUnit')
      .paginate(page, limit)

    return ApiResponse.ok(response, data, 'News retrieved successfully')
  }

  async show({ params, response }: HttpContext) {
    const data = await News.query()
      .where('aktif', true)
      .where('id', params.id)
      .preload('bloodDonorUnit')
      .first()
    if (!data) return ApiResponse.badRequest(response, 'No data')
    return ApiResponse.ok(response, NewsSerializer.single(data), 'News show retrieved successfully')
  }
}
