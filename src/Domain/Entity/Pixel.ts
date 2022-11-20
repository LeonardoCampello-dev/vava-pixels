export class Pixel {
  private video: string | undefined
  private description: string | undefined

  constructor(
    private map: string,
    private agent: string,
    private ability: string,
    private images: string[],
    private id?: string
  ) {}

  public getVideo(): string | undefined {
    return this.video
  }

  public getDescription(): string | undefined {
    return this.description
  }

  public getMap(): string {
    return this.map
  }

  public getAgent(): string {
    return this.agent
  }

  public getAbility(): string {
    return this.ability
  }

  public getImages(): string[] {
    return this.images
  }

  public getId(): string | undefined {
    return this.id
  }

  public addImage(image: string): this {
    this.images.push(image)

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

  public setMap(map: string): this {
    this.map = map

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

  public setImages(images: string[]): this {
    this.images = images

    return this
  }
}
