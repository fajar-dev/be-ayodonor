import type { HttpContext } from '@adonisjs/core/http'
import ApiResponse from '../Helpers/ApiResponse.js'
import StockSerializer from '../Serializers/stock_serializer.js'
import StockProduct from '#models/stock_product'
import StockProductSerializer from '../Serializers/stock_product_serializer.js'
import Stock from '#models/stock'

export default class StocksController {
  async index({ response, request }: HttpContext) {
    const q = request.input('q', '')
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    const data = await Stock.query().where('namaudd', 'LIKE', `%${q}%`).paginate(page, limit)
    return ApiResponse.ok(
      response,
      StockSerializer.collection(data),
      'Blood stock retrieved successfully'
    )
  }

  async show({ response, params }: HttpContext) {
    const stock = await Stock.query().where('id', params.id).first()
    if (!stock) return ApiResponse.badRequest(response, 'No data')
    const productStock = await StockProduct.query()
      .where('udd', params.id)
      .andWhere((query) => {
        query
          .where('aPos', '!=', '0')
          .orWhere('bPos', '!=', '0')
          .orWhere('oPos', '!=', '0')
          .orWhere('abPos', '!=', '0')
      })
      .orderBy('produk', 'desc')
    return ApiResponse.ok(
      response,
      StockProductSerializer.single(stock, productStock),
      'Blood stock show retrieved successfully'
    )
  }
}
