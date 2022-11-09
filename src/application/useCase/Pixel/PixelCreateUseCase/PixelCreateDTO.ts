import { IPixelCreateRequestPayload } from '../../../../adapter/http/IPixelCreateRequestPayload'
import { Pixel } from '../../../../domain/entity/Pixel'

export class PixelCreateDTO {
  constructor(
    private map: string,
    private agent: string,
    private ability: string,
    private images: string[],
    private video?: string,
    private description?: string
  ) {}

  public static buildFromHttpRequest(payload: IPixelCreateRequestPayload) {
    return new PixelCreateDTO(
      payload.map,
      payload.agent,
      payload.ability,
      payload.images,
      payload.video,
      payload.description
    )
  }

  public toDomain(): Pixel {
    const domain = new Pixel(this.map, this.agent, this.ability, this.images)

    if (this.video) domain.setVideo(this.video)
    if (this.description) domain.setDescription(this.description)

    return domain
  }
}
