import {
  PixelUpdateDTO,
  PixelUpdateUseCase
} from '../../../../../src/application/useCase/Pixel/PixelUpdateUseCase'
import { Pixel } from '../../../../../src/domain/entity'
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
})
