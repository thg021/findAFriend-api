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

  //   const {
  //     name,
  //     description,
  //     age,
  //     size,
  //     energyLevel,
  //     independenceLevel,
  //     environment,
  //     adoptionsRequirements,
  //   } = registerPetsBodySchema.parse(request.body)

  const body = registerPetsBodySchema.parse(request.body)

  return reply.status(201).send({ pets: body })
}
