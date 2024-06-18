import type { HttpContext } from '@adonisjs/core/http'
import ApiResponse from '../Helpers/ApiResponse.js'
import BloodDonorUnit from '#models/blood_donor_unit'
import BloodDonorUnitSerializer from '../Serializers/blood_donor_unit_serializer.js'

export default class BloodDonorUnitsController {
  async index({ response, request }: HttpContext) {
    const q = request.input('q', '')
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const data = await BloodDonorUnit.query().where('nama', 'LIKE', `%${q}%`).paginate(page, limit)

    return ApiResponse.ok(
      response,
      BloodDonorUnitSerializer.collection(data),
      'Blood donor unit retrieved successfully'
    )
  }
}
