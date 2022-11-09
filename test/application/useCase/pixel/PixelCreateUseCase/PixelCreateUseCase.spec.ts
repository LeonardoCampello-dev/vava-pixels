import { PixelCreateDTO } from '../../../../../src/application/useCase/Pixel/PixelCreateUseCase/PixelCreateDTO'
import { PixelCreateUseCase } from '../../../../../src/application/useCase/Pixel/PixelCreateUseCase/PixelCreateUseCase'
import { PixelRepositoryMock } from '../../../../mock/PixelRepositoryMock'

describe('pixel create use case', () => {
  it('should create a pixel from the data received in dto', async () => {
    const map = 'map'
    const agent = 'agent'
    const ability = 'ability'
    const images = ['image one', 'image two']

    const dto = new PixelCreateDTO(map, agent, ability, images)

    const repositoryMock = new PixelRepositoryMock()

    const useCase = new PixelCreateUseCase(repositoryMock)

    const result = await useCase.execute(dto)

    expect(result.getMap()).toBe(map)
    expect(result.getAgent()).toBe(agent)
    expect(result.getAbility()).toBe(ability)
    expect(result.getImages()).toContain(images[0])
    expect(result.getImages()).toContain(images[1])
  })
})
