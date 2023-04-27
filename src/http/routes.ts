import { FastifyInstance } from 'fastify'
import { RegisterPets } from './controllers/pets/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/pets', RegisterPets)
}
