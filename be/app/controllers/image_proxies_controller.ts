import type { HttpContext } from '@adonisjs/core/http'
import axios from 'axios'

export default class ImageProxiesController {
  async index({ response, params, request }: HttpContext) {
    const imageUrl = 'https://dbdonor.pmi.or.id/pmi/berita/' + params.img

    try {
      const imageResponse = await axios({
        url: imageUrl,
        method: 'GET',
        responseType: 'stream',
      })

      response.header('Content-Type', imageResponse.headers['content-type'])
      response.header('Content-Length', imageResponse.headers['content-length'])
      return response.stream(imageResponse.data)
    } catch (error) {
      response.status(500).send('Internal Server Error')
      if (error.response && error.response.status === 404) {
        response.status(404).send('Not Found')
      } else {
      }
    }
  }
}
