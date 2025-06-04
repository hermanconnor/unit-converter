import { Router } from 'express';
import { weightAbbr, weightUnits } from '../utils/units';
import { convertSchema } from '../validators/convertSchema';
import { convertWeight } from '../utils/converters';

const router = Router();

router.get('/', (req, res) => {
  res.render('weight', {
    title: 'Unit Converter - Weight',
    currentPage: 'weight',
    units: weightUnits,
  });
});

router.post('/', (req, res, next) => {
  try {
    const parsedData = convertSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.render('length', {
        title: 'Unit Converter - Weight',
        currentPage: 'weight',
        units: weightUnits,
        result: null,
        error: parsedData.error.issues[0].message,
      });
    }

    const { value, fromUnit, toUnit } = parsedData.data;

    const result = convertWeight(value, fromUnit, toUnit).toFixed(2);

    const fromAbbr = weightAbbr[fromUnit];
    const toAbbr = weightAbbr[toUnit];

    res.render('weight', {
      title: 'Unit Converter - Weight',
      currentPage: 'weight',
      units: weightUnits,
      value,
      fromAbbr,
      toAbbr,
      result,
      error: null,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
