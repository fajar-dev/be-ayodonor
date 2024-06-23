import app from '@adonisjs/core/services/app'
import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import ApiResponse from '../Helpers/ApiResponse.js'

export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  /**
   * The method is used for handling errors and returning
   * response to the client
   */
  async handle(error: any, ctx: HttpContext) {
    /**
     * Self handle the validation exception
     */
    if (error.code === 'E_VALIDATION_FAILURE') {
      return ApiResponse.validationError(ctx.response, error.messages.errors)
    }

    if (error.code === 'E_ROUTE_NOT_FOUND') {
      return ApiResponse.notFound(ctx.response, error.message)
    }

    if (error.code === 'E_INVALID_API_TOKEN') {
      return ApiResponse.unauthorized(ctx.response, error.message)
    }

    if (error.code === 'E_UNAUTHORIZED_ACCESS') {
      return ApiResponse.unauthorized(ctx.response, error.message)
    }

    /**
     * Forward rest of the exceptions to the parent class
     */
    return ApiResponse.internalServerError(ctx.response, error.message, error.stack)
  }

  /**
   * The method is used to report error to the logging service or
   * the third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
