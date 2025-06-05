import { Router } from 'express';
import { convertTemperature } from '../utils/converters';
import { convertSchema } from '../validators/convertSchema';
import { temperatureAbbr } from '../utils/units';

const router = Router();

router.get('/', (req, res) => {
  res.render('temperature', {
    title: 'Unit Converter - Temperature',
    currentPage: 'temperature',
  });
});

router.post('/', (req, res, next) => {
  try {
    const parsedData = convertSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.render('temperature', {
        title: 'Unit Converter - Temperature',
        currentPage: 'temperature',
        result: null,
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
