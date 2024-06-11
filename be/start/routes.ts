/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ContactsController = () => import('#controllers/contacts_controller')
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    projects: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    type: process.env.NODE_ENV,
  }
})

router.get('/contact', [ContactsController, 'index'])
