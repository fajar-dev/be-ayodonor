import path from 'node:path'
import url from 'node:url'

export default {
  path: path.dirname(url.fileURLToPath(import.meta.url)) + '/../', // for AdonisJS v6
  title: 'Foo', // use info instead
  version: '1.0.0', // use info instead
  description: '', // use info instead
  tagIndex: 2,
  info: {
    title: 'Ayodonor PMI Public API',
    version: '1.0.0',
    description:
      'AYODONOR is an application and information portal that is packaged to facilitate transfusion blood services through the Indonesian Red Cross in all cities / districts in Indonesia, in terms of Social and Humanitarian Services we try to facilitate the distribution of your assistance / donations to beneficiaries directly through PMI.',
  },
  snakeCase: true,

  debug: false, // set to true, to get some useful debug output
  ignore: ['/swagger', '/docs', '/images/'],
  preferredPutPatch: 'PUT', // if PUT/PATCH are provided for the same route, prefer PUT
  common: {
    parameters: {}, // OpenAPI conform parameters that are commonly used
    headers: {}, // OpenAPI conform headers that are commonly used
  },
  securitySchemes: {}, // optional
  authMiddlewares: ['auth', 'auth:api'], // optional
  defaultSecurityScheme: 'BearerAuth', // optional
  persistAuthorization: true, // persist authorization between reloads on the swagger page
  showFullPath: false, // the path displayed after endpoint summary
}
