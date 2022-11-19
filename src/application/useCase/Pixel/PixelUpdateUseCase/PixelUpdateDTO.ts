import { Pixel } from '../../../../domain/entity/Pixel'

export class PixelUpdateDTO {
  private map: string | undefined
  private agent: string | undefined
  private ability: string | undefined
  private images: string[] | undefined
  private video: string | undefined
  private description: string | undefined

  constructor(private readonly pixelId: string) {}

  public merge(pixelToUpdate: Pixel): Pixel {
    if (this.map !== undefined) pixelToUpdate.setMap(this.map)

    if (this.agent !== undefined) pixelToUpdate.setAgent(this.agent)

    if (this.ability !== undefined) pixelToUpdate.setAbility(this.ability)

    if (this.video !== undefined) pixelToUpdate.setVideo(this.video)

    if (this.description !== undefined) pixelToUpdate.setDescription(this.description)

    if (this.images?.length) pixelToUpdate.setImages(this.images)

    return pixelToUpdate
  }

  public getPixelId(): string {
    return this.pixelId
  }

  public setMap(map: string): this {
    this.map = map

    return this
  }

  public addImage(image: string): this {
    if (!Array.isArray(this.images)) this.images = []

    this.images.push(image)

    return this
  }

  public setAgent(agent: string): this {
    this.agent = agent

    return this
  }

  public setAbility(ability: string): this {
    this.ability = ability

    return this
  }

  public setVideo(video: string): this {
    this.video = video

    return this
  }

  public setDescription(description: string): this {
    this.description = description

    return this
  }
}
