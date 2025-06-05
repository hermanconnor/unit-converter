export const lengthAbbr: Record<string, string> = {
  millimeters: 'mm',
  centimeters: 'cm',
  meters: 'm',
  kilometers: 'km',
  inches: 'in',
  feet: 'ft',
  yards: 'yd',
  miles: 'mi',
};

export const lengthUnits = [
  { value: 'meters', label: 'Meters (m)' },
  { value: 'kilometers', label: 'Kilometers (km)' },
  { value: 'centimeters', label: 'Centimeters (cm)' },
  { value: 'millimeters', label: 'Millimeters (mm)' },
  { value: 'miles', label: 'Miles (mi)' },
  { value: 'yards', label: 'Yards (yd)' },
  { value: 'feet', label: 'Feet (ft)' },
  { value: 'inches', label: 'Inches (in)' },
];

export const weightAbbr: Record<string, string> = {
  milligrams: 'mg',
  grams: 'g',
  kilograms: 'kg',
  ounces: 'oz',
  pounds: 'lb',
};

export const weightUnits = [
  { value: 'milligrams', label: 'Milligrams (mg)' },
  { value: 'grams', label: 'Grams (g)' },
  { value: 'kilograms', label: 'Kilograms (kg)' },
  { value: 'ounces', label: 'Ounces (oz)' },
  { value: 'pounds', label: 'Pounds (lb)' },
];

export const temperatureAbbr: Record<string, string> = {
  celsius: '°C',
  fahrenheit: '°F',
  kelvin: 'K',
};
