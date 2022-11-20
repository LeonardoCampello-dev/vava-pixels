import { PixelGetOneByIdUseCase } from '../../../../../src/application/useCase/Pixel/PixelGetOneByIdUseCase/PixelGetOneByIdUseCase'
import { Pixel } from '../../../../../src/domain/entity'
import { PixelRepositoryMock } from '../../../../mock/PixelRepositoryMock'

describe('pixel get one by id use case', () => {
  it('should return a pixel with the requested id', async () => {
    const repository = new PixelRepositoryMock()

    const pixelId = 'id'

    await repository.create(new Pixel('map', 'agent', 'ability', ['image'], pixelId))

    const useCase = new PixelGetOneByIdUseCase(repository)

    const pixelFound = await useCase.execute(pixelId)

    expect(pixelFound.getId()).toBe(pixelId)
  })
})
