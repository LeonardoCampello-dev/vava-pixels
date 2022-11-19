import { PixelDeleteUseCase } from '../../../../../src/application/useCase/Pixel/PixelDeleteUseCase'
import { Pixel } from '../../../../../src/domain/entity'
import { PixelNotFoundException } from '../../../../../src/exception'
import { PixelRepositoryMock } from '../../../../mock/PixelRepositoryMock'

describe('pixel delete use case', () => {
  it('should return true if pixel is deleted', async () => {
    const repository = new PixelRepositoryMock()

    const existingPixel = await repository.create(
      new Pixel('map', 'agent', 'ability', ['image'], 'id')
    )

    const useCase = new PixelDeleteUseCase(repository)

    const result = await useCase.execute(existingPixel.getId()!)

    expect(result).toBeTruthy()
  })

  it('should throw an exception if the pixel doesnt exist', async () => {
    try {
      const useCase = new PixelDeleteUseCase(new PixelRepositoryMock())

      await useCase.execute('invalid-id')
    } catch (error) {
      expect(error).toBeInstanceOf(PixelNotFoundException)
    }
  })
})
