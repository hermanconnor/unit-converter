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

export function convertTemperature(
  value: number,
  from: string,
  to: string,
): number {
  if (from === to) return value;

  if (from === 'celsius') {
    if (to === 'fahrenheit') return (value * 9) / 5 + 32;
    if (to === 'kelvin') return value + 273.15;
  }

  if (from === 'fahrenheit') {
    if (to === 'celsius') return ((value - 32) * 5) / 9;
    if (to === 'kelvin') return ((value - 32) * 5) / 9 + 273.15;
  }

  if (from === 'kelvin') {
    if (to === 'celsius') return value - 273.15;
    if (to === 'fahrenheit') return ((value - 273.15) * 9) / 5 + 32;
  }

  throw new Error('Invalid temperature conversion');
}
