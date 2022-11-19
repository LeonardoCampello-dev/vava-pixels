import { Pixel } from '../../../../domain/entity/Pixel'
import { PixelRepository } from '../../../../domain/repository/PixelRepository'
import { PixelUpdateDTO } from './PixelUpdateDTO'

export class PixelUpdateUseCase {
  constructor(private readonly repository: PixelRepository) {}

  public async execute(dto: PixelUpdateDTO): Promise<Pixel> {
    const pixelToUpdate = await this.repository.getOneById(dto.getPixelId())

    return await this.repository.save(dto.merge(pixelToUpdate))
  }
}
