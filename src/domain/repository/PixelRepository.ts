import { Pixel } from '../entity/Pixel'

export abstract class PixelRepository {
  abstract getOneById(id: string): Pixel

  abstract getList(): Pixel[]

  abstract save(pixel: Pixel): Pixel

  abstract deleteOneById(id: string): void
}
