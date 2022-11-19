import { Pixel } from '../../src/domain/entity'
import { PixelRepository } from '../../src/domain/repository'
import { PixelNotFoundException } from '../../src/exception'

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

  public async create(pixel: Pixel): Promise<Pixel> {
    this.pixels.push(pixel)

    return pixel
  }

  public async update(pixelToUpdate: Pixel): Promise<Pixel> {
    const index = this.pixels.findIndex(pixel => pixel.getId() === pixelToUpdate.getId())

    if (index === -1) throw new PixelNotFoundException()

    this.pixels[index] = pixelToUpdate

    return pixelToUpdate
  }

  public async save(pixel: Pixel): Promise<Pixel> {
    if (pixel.getId()) return this.update(pixel)

    return this.create(pixel)
  }

  public async delete(id: string): Promise<boolean> {
    const pixelExists = this.pixels.some(pixel => pixel.getId() === id)

    if (!pixelExists) throw new PixelNotFoundException()

    this.pixels = this.pixels.filter(pixel => pixel.getId() !== id)

    return true
  }
}
