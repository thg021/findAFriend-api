import { Pet } from '@prisma/client'
import { IPetsRepository } from '../repositories/pets-repository.interface'

interface RegisterUseCaseRequest {
  id?: string
  name: string
  description: string
  age: string
  size: string
  energyLevel: number
  independenceLevel: number
  environmentSize: string
}

interface RegisterUseCaseResponse {
  pet: Pet
}
export class RegisterUseCase {
  constructor(private petsRepository: IPetsRepository) {}

  async execute(
    data: RegisterUseCaseRequest,
  ): Promise<RegisterUseCaseResponse> {
    const pet = await this.petsRepository.create(data)

    return {
      pet,
    }
  }
}
