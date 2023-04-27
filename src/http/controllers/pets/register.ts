import { PrismaPetsRepository } from '@/http/repositories/prisma/prisma-pets-repository'
import { RegisterUseCase } from '@/http/use-cases/register'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function RegisterPets(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerPetsBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    age: z.enum(['Filhote', 'Aduto', 'Idoso']),
    size: z.enum(['P', 'M', 'G']),
    energyLevel: z.number().min(1).max(5),
    independenceLevel: z.number().min(1).max(3),
    environmentSize: z.enum(['P', 'M', 'G']),
    adoptionsRequirements: z.array(z.string()),
  })

  const {
    name,
    description,
    age,
    size,
    energyLevel,
    independenceLevel,
    environmentSize,
  } = registerPetsBodySchema.parse(request.body)

  const petsRepository = new PrismaPetsRepository()
  const registerUseCase = new RegisterUseCase(petsRepository)
  const pet = await registerUseCase.execute({
    name,
    description,
    age,
    size,
    energyLevel,
    independenceLevel,
    environmentSize,
  })

  return reply.status(201).send({ pets: pet })
}
