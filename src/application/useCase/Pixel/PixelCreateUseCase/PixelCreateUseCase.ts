import { Pixel } from '../../../../domain/entity/Pixel'
import { PixelRepository } from '../../../../domain/repository/PixelRepository'
import { PixelCreateDTO } from './PixelCreateDTO'

export class PixelCreateUseCase {
  constructor(private readonly repository: PixelRepository) {}

  public async execute(dto: PixelCreateDTO): Promise<Pixel> {
    return await this.repository.save(dto.toDomain())
  }
}
