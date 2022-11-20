import { Pixel } from '../../../../domain/entity'
import { PixelRepository } from '../../../../domain/repository'

export class PixelGetOneByIdUseCase {
  constructor(private readonly repository: PixelRepository) {}

  public async execute(id: string): Promise<Pixel> {
    return await this.repository.getOneById(id)
  }
}
