export class Particle {
  private horizontal: number;
  private coordinate: number;

  constructor(range: number[]) {
    const [max_width, max_height] = range;
    this.horizontal = Math.random() * max_width;
    this.coordinate = Math.random() * max_height;
  }
}
