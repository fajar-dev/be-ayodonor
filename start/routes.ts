/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const NewsController = () => import('#controllers/news_controller')
const BloodDonorUnitsController = () => import('#controllers/blood_donor_units_controller')
const SchedulesController = () => import('#controllers/schedules_controller')
const StocksController = () => import('#controllers/stocks_controller')
const ImageProxiesController = () => import('#controllers/image_proxies_controller')
import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'
// returns swagger in YAML
router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})

router.get('/', async () => {
  return {
    projects: process.env.APP_NAME,
    lastVersion: process.env.APP_VERSION,
    type: process.env.NODE_ENV,
  }
})
router
  .group(() => {
    router.get('/', async () => {
      return {
        projects: process.env.APP_NAME,
        version: process.env.APP_VERSION,
        type: process.env.NODE_ENV,
      }
    })
    router.get('/blood-donor-unit', [BloodDonorUnitsController, 'index'])
    router.get('/news', [NewsController, 'index'])
    router.get('/news/:id', [NewsController, 'show'])
    router.get('/schedule', [SchedulesController, 'index'])
    router.get('/stock', [StocksController, 'index'])
    router.get('/stock/:id', [StocksController, 'show'])
  })
  .prefix('/v1')

router.get('/images/:img', [ImageProxiesController, 'index']).as('image')
