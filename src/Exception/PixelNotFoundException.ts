export class PixelNotFoundException extends Error {
  constructor() {
    super('pixel not found.')
  }
}
