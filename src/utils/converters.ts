const lengthToBase: Record<string, number> = {
  millimeters: 0.001,
  centimeters: 0.01,
  meters: 1,
  kilometers: 1000,
  inches: 0.0254,
  feet: 0.3048,
  yards: 0.9144,
  miles: 1609.34,
};

const weightToBase: Record<string, number> = {
  milligrams: 0.001,
  grams: 1,
  kilograms: 1000,
  ounces: 28.3495,
  pounds: 453.592,
};

export function convertLength(value: number, from: string, to: string): number {
  return (value * lengthToBase[from]) / lengthToBase[to];
}

export function convertWeight(value: number, from: string, to: string): number {
  return (value * weightToBase[from]) / weightToBase[to];
}
