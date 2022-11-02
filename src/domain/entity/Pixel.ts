export class Pixel {
  private video: string | undefined
  private description: string | undefined

  constructor(
    private map: string,
    private agent: string,
    private ability: string,
    private images: string[]
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
}
