/* eslint-disable unicorn/filename-case */
//app/Helpers/Response.ts

import type { HttpContext } from '@adonisjs/core/http'

export default class ApiResponse {
  /**
   * Send a success response with data and an optional message
   *
   * @param response - HttpContext response object
   * @param statusCode - HTTP status code for the error
   * @param data - Data to be sent in the response
   * @param message - Optional message to include in the response
   */
  static sendSuccess(
    response: HttpContext['response'],
    statusCode: number,
    data: any,
    message?: string
  ) {
    const responseData = { success: true, message, data }

    return response.status(statusCode).json(responseData)
  }

  /**
   * Send a Ok response with data and an optional message
   *
   * @param response - HttpContext response object
   * @param data - Data to be sent in the response
   * @param message - Optional message to include in the response
   */
  static ok(response: HttpContext['response'], data: any, message?: string) {
    return this.sendSuccess(response, 200, data, message)
  }

  /**
   * Send a created response with data and an optional message
   *
   * @param response - HttpContext response object
   * @param data - Data to be sent in the response
   * @param message - Optional message to include in the response
   */
  static created(response: HttpContext['response'], data: any, message?: string) {
    return this.sendSuccess(response, 201, data, message)
  }

  /**
   * Send an error response with a specific status code, message, and optional data
   *
   * @param response - HttpContext response object
   * @param statusCode - HTTP status code for the error
   * @param message - Error message
   * @param data - Optional additional data to include in the response
   */
  static sendError(
    response: HttpContext['response'],
    statusCode: number,
    message: string,
    errors?: any,
    data?: any
  ) {
    // Define the base type of the errorResponse object
    const errorResponse: {
      success: boolean
      message: string
      error: {
        code: number
        errors: any
      }
      data?: any // Add optional 'data' property
    } = { success: false, message, error: { code: statusCode, errors } }

    // Conditionally add 'data' property if it is provided
    if (data) {
      errorResponse.data = data
    }

    return response.status(statusCode).json(errorResponse)
  }

  /**
   * Send an internal server error response with an optional custom message
   * The message is displayed in development mode, while in production, a generic message is shown.
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for internal server error
   * @param errors - error stack to display
   */
  static internalServerError(
    response: HttpContext['response'],
    message: string = 'Internal Server Error',
    errors: any
  ) {
    const isProduction = process.env.NODE_ENV === 'production'

    if (isProduction) {
      return this.sendError(response, 500, 'Internal Server Error')
    } else {
      return this.sendError(response, 500, message, errors)
    }
  }

  /**
   * Send a not found response
   *
   * @param response - HttpContext response object
   * @param message - Custom message for not found error
   */
  static notFound(response: HttpContext['response'], message: string = 'Not Found') {
    return this.sendError(response, 404, message)
  }

  /**
   * Send a bad request response
   *
   * @param response - HttpContext response object
   * @param message - Custom message for bad request error
   */
  static badRequest(response: HttpContext['response'], message: string = 'Bad Request') {
    return this.sendError(response, 400, message)
  }

  /**
   * Send an unauthorized response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for unauthorized error
   */
  static unauthorized(response: HttpContext['response'], message: string = 'Unauthorized') {
    return this.sendError(response, 401, message)
  }

  /**
   * Send a forbidden response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for forbidden error
   */
  static forbidden(response: HttpContext['response'], message: string = 'Forbidden') {
    return this.sendError(response, 403, message)
  }

  /**
   * Send a conflict response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for conflict error
   */
  static conflict(response: HttpContext['response'], message: string = 'Conflict') {
    return this.sendError(response, 409, message)
  }

  /**
   * Send a validation error response with details
   *
   * @param response - HttpContext response object
   * @param errors - Validation errors object
   */
  static validationError(response: HttpContext['response'], errors: any) {
    return this.sendError(response, 422, 'Validation Error', errors)
  }

  /**
   * Send a method not allowed response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for method not allowed error
   */
  static methodNotAllowed(
    response: HttpContext['response'],
    message: string = 'Method Not Allowed'
  ) {
    return this.sendError(response, 405, message)
  }

  /**
   * Send a gone response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for gone error
   */
  static gone(response: HttpContext['response'], message: string = 'Gone') {
    return this.sendError(response, 410, message)
  }

  /**
   * Send a precondition failed response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for precondition failed error
   */
  static preconditionFailed(
    response: HttpContext['response'],
    message: string = 'Precondition Failed'
  ) {
    return this.sendError(response, 412, message)
  }

  /**
   * Send a too many requests response with an optional custom message
   *
   * @param response - HttpContext response object
   * @param message - Optional custom message for too many requests error
   */
  static tooManyRequests(response: HttpContext['response'], message: string = 'Too Many Requests') {
    return this.sendError(response, 429, message)
  }
}
