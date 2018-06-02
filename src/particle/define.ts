export interface ParticlesOptions {
  maxParticles?: number;
  sizeVariations?: number;
  speed?: number;
  color?: string | string[];
  minDistance?: number;
  connectParticles?: boolean;
}

export interface ParticleArgs {
  element: HTMLCanvasElement;
  options: ParticleOption;
}

interface ParticleOption {
  speed: number;
  sizeVariations: number;
  color: string[] | string;
}
