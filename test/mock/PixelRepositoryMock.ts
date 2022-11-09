import { Pixel } from '../../src/domain/entity/Pixel'
import { PixelRepository } from '../../src/domain/repository/PixelRepository'
import { PixelNotFoundException } from '../../src/exception/PixelNotFoundException'

export class PixelRepositoryMock extends PixelRepository {
  private pixels: Pixel[] = []

  public async getOneById(id: string): Promise<Pixel> {
    const pixel = this.pixels.find(pixel => pixel.getId() === id)

    if (!pixel) throw new PixelNotFoundException()

    return pixel
  }

  public async getList(): Promise<Pixel[]> {
    return this.pixels
  }

  create(pixel: Pixel): Pixel {
    this.pixels.push(pixel)

    return pixel
  }

  public async update(pixelToUpdate: Pixel): Promise<Pixel> {
    const index = this.pixels.findIndex(pixel => pixel.getId() === pixelToUpdate.getId())

    if (!index) throw new PixelNotFoundException()

    this.pixels[index] = pixelToUpdate

    return pixelToUpdate
  }

  public async save(pixel: Pixel): Promise<Pixel> {
    if (pixel.getId()) return this.update(pixel)

    return this.create(pixel)
  }

  public async deleteOneById(id: string): Promise<void> {
    this.pixels = this.pixels.filter(pixel => pixel.getId() !== id)
  }
}
