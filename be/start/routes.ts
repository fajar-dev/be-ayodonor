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
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    projects: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    type: process.env.NODE_ENV,
  }
})
router
  .group(() => {
    router.get('/blood-donor-unit', [BloodDonorUnitsController, 'index'])
    router.get('/news', [NewsController, 'index'])
    router.get('/news/:id', [NewsController, 'show'])
    router.get('/schedule', [SchedulesController, 'index'])
    router.get('/stock', [StocksController, 'index'])
    router.get('/stock/:id', [StocksController, 'show'])
  })
  .prefix('/v1')
