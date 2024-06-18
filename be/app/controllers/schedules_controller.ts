import type { HttpContext } from '@adonisjs/core/http'
import ApiResponse from '../Helpers/ApiResponse.js'
import Schedule from '#models/schedule'
import ScheduleSerializer from '../Serializers/schedule_serializer.js'
import { DateTime } from 'luxon'

export default class SchedulesController {
  async index({ response, request }: HttpContext) {
    const q = request.input('q', '')
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const bloodDonorUnitId = request.input('bloodDonorUnitId', '')
    let dateInput = request.input('date', null)
    let date = dateInput ? DateTime.fromISO(dateInput).toISODate() : DateTime.now().toISODate()

    const data = await Schedule.query()
      .where('batal', false)
      .where('instansi', 'LIKE', `%${q}%`)
      .whereRaw(`DATE(TglPenjadwalan) = ?`, [date ?? ''])
      .preload('bloodDonorUnit')
      .if(bloodDonorUnitId, (query) => {
        query.where('udd', bloodDonorUnitId)
      })
      .paginate(page, limit)
    return ApiResponse.ok(
      response,
      ScheduleSerializer.collection(data),
      'Mobile Unit Schedule retrieved successfully'
    )
  }
}
