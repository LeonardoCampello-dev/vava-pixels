import { Pixel } from '../entity/Pixel'

export abstract class PixelRepository {
  abstract getOneById(id: string): Promise<Pixel>

  abstract getList(): Promise<Pixel[]>

  abstract save(pixel: Pixel): Promise<Pixel>

  abstract delete(id: string): Promise<boolean>
}
