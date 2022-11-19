import {
  PixelUpdateDTO,
  PixelUpdateUseCase
} from '../../../../../src/application/useCase/Pixel/PixelUpdateUseCase'
import { Pixel } from '../../../../../src/domain/entity'
import { PixelNotFoundException } from '../../../../../src/exception'
import { PixelRepositoryMock } from '../../../../mock/PixelRepositoryMock'

describe('pixel update use case', () => {
  it('should update properties received in dto', async () => {
    const repository = new PixelRepositoryMock()

    const createdPixel = await repository.create(
      new Pixel('map', 'agent', 'ability', ['image'], 'id')
    )

    const abilityToUpdate = 'updated-ability'
    const imagesToUpdate = ['updated-images']

    const dto = new PixelUpdateDTO(createdPixel.getId()!).setAbility(abilityToUpdate)

    imagesToUpdate.map(image => dto.addImage(image))

    const useCase = new PixelUpdateUseCase(repository)

    const updatedPixel = await useCase.execute(dto)

    expect(updatedPixel.getAbility()).toBe(abilityToUpdate)
    expect(updatedPixel.getImages()).toContain(imagesToUpdate[0])
  })

  it('should throw an exception if the pixel doesnt exist', async () => {
    try {
      const useCase = new PixelUpdateUseCase(new PixelRepositoryMock())

      await useCase.execute(new PixelUpdateDTO('invalid-id'))
    } catch (error) {
      expect(error).toBeInstanceOf(PixelNotFoundException)
    }
  })
})
