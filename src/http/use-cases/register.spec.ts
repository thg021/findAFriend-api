import { describe, expect, it } from 'vitest'
import { InMemoryPetsRepository } from '../repositories/in-memory/in-memory-pets-repository'
import { RegisterUseCase } from './register'

describe('RegisterUsecase unit test', () => {
  it('should register a pet', async () => {
    const petsRepository = new InMemoryPetsRepository()
    const usecase = new RegisterUseCase(petsRepository)

    const { pet } = await usecase.execute({
      name: 'nina',
      description: 'description',
      age: 'Adulto',
      size: 'P',
      energyLevel: 2,
      independenceLevel: 3,
      environmentSize: 'P',
    })

    expect(pet.id).toEqual(expect.any(String))
  })
})
