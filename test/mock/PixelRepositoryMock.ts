import { Pixel } from '../../src/domain/entity/Pixel'
import { PixelRepository } from '../../src/domain/repository/PixelRepository'
import { PixelNotFoundException } from '../../src/exception/PixelNotFoundException'

export class PixelRepositoryMock extends PixelRepository {
  private pixels: Pixel[] = []

  getOneById(id: string): Pixel {
    const pixel = this.pixels.find(pixel => pixel.getId() === id)

    if (!pixel) throw new PixelNotFoundException()

    return pixel
  }

  getList(): Pixel[] {
    return this.pixels
  }

  create(pixel: Pixel): Pixel {
    this.pixels.push(pixel)

    return pixel
  }

  update(pixelToUpdate: Pixel): Pixel {
    const index = this.pixels.findIndex(pixel => pixel.getId() === pixelToUpdate.getId())

    if (!index) throw new PixelNotFoundException()

    this.pixels[index] = pixelToUpdate

    return pixelToUpdate
  }

  save(pixel: Pixel): Pixel {
    if (pixel.getId()) return this.update(pixel)

    return this.create(pixel)
  }

  deleteOneById(id: string): void {
    this.pixels = this.pixels.filter(pixel => pixel.getId() !== id)
  }
}
