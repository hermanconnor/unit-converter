import { Router } from 'express';
import { convertTemperature } from '../utils/converters';
import { temperatureSchema } from '../validators/convertSchema';
import { temperatureAbbr, temperatureUnits } from '../utils/units';

const router = Router();

router.get('/', (req, res) => {
  res.render('temperature', {
    title: 'Unit Converter - Temperature',
    currentPage: 'temperature',
    units: temperatureUnits,
  });
});

router.post('/', (req, res, next) => {
  try {
    // const parsedData = convertSchema.safeParse(req.body);
    const parsedData = temperatureSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.render('temperature', {
        title: 'Unit Converter - Temperature',
        currentPage: 'temperature',
        units: temperatureUnits,
        body: req.body,
        error: parsedData.error.issues[0].message,
      });
    }

    const { value, fromUnit, toUnit } = parsedData.data;

    const result = convertTemperature(value, fromUnit, toUnit).toFixed(2);
    const fromAbbr = temperatureAbbr[fromUnit];
    const toAbbr = temperatureAbbr[toUnit];

    res.render('temperature', {
      title: 'Unit Converter - Temperature',
      currentPage: 'temperature',
      units: temperatureUnits,
      value,
      result,
      fromAbbr,
      toAbbr,
      error: null,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
