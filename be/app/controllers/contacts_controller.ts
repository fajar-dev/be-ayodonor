import type { HttpContext } from '@adonisjs/core/http'
import ApiResponse from '../Helpers/ApiResponse.js'
import BloodDonorUnit from '#models/blood_donor_unit'

export default class ContactsController {
  async index({ response, request }: HttpContext) {
    const q = request.input('q', '')
    const page = request.input('page', 1)
    const limit = request.input('limit', 5)
    const data = await BloodDonorUnit.query().where('nama', 'LIKE', `%${q}%`).paginate(page, limit)

    return ApiResponse.ok(response, data, 'blood donor unit retrieved successfully')
  }
}
