import Log from '#models/log'
import type { HttpContext } from '@adonisjs/core/http'
// import { Logger } from '@adonisjs/core/logger'
// import type { NextFn } from '@adonisjs/core/types/http'

export default class LoggerMiddleware {
  async handle({ request, response }: HttpContext, next: () => Promise<void>) {
    const start = Date.now()

    await next()

    const end = Date.now()
    const responseTime = end - start

    const logData = {
      env: process.env.NODE_ENV,
      route: request.url(),
      ip: request.ip(),
      browser: request.headers()['user-agent'],
      request: JSON.stringify(request.all()),
      response_time: responseTime.toString(),
      response_code: response.response.statusCode,
      response: JSON.stringify(response.getBody()),
    }

    // Save log to database
    await Log.create(logData)

    // Optional: Log to console as well
    // Logger.info(`Logged: ${JSON.stringify(logData)}`)
  }
}
