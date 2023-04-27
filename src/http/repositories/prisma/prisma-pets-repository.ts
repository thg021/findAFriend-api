import { Prisma, Pet } from '@prisma/client'
import { IPetsRepository } from '../pets-repository.interface'
import { prisma } from '@/lib/prisma'

export class PrismaPetsRepository implements IPetsRepository {
  async create(data: Prisma.PetCreateInput): Promise<Pet> {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }
}
