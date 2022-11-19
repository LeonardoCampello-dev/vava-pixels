import { PixelRepository } from '../../../../domain/repository'

export class PixelDeleteUseCase {
  constructor(private readonly repository: PixelRepository) {}

  public async execute(id: string): Promise<boolean> {
    return await this.repository.delete(id)
  }
}
