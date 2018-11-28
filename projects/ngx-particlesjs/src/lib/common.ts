export interface ParticleArgs {
  speed?: 'fast' | 'normal' | 'slow' | number[];
  size?: number;
}

export function saveDecimal(origin: number) {
  return Math.floor(origin * 100) / 100;
}
