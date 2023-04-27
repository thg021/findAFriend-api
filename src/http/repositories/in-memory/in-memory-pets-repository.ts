import { Prisma, Pet } from '@prisma/client'
import { IPetsRepository } from '../pets-repository.interface'
export class InMemoryPetsRepository implements IPetsRepository {
  public items: Pet[] = []

  async create(data: Prisma.PetCreateInput): Promise<Pet> {
    const pet: Pet = {
      id: 'pet-1',
      name: data.name,
      description: data.description,
      age: data.age,
      size: data.size,
      energyLevel: data.energyLevel,
      independenceLevel: data.independenceLevel,
      environmentSize: data.environmentSize,
      created_at: new Date(),
    }
    this.items.push(pet)

    return pet
  }
}
