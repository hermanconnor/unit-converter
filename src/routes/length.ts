import { Router } from 'express';
import { lengthAbbr, lengthUnits } from '../utils/units';
import { convertSchema } from '../validators/convertSchema';
import { convertLength } from '../utils/converters';

const router = Router();

router.get('/', (req, res) => {
  res.render('length', {
    title: 'Unit Converter - Length',
    currentPage: 'length',
    units: lengthUnits,
  });
});

router.post('/', (req, res, next) => {
  try {
    const parsedData = convertSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.render('length', {
        title: 'Unit Converter - Length',
        currentPage: 'length',
        units: lengthUnits,
        body: req.body,
        error: parsedData.error.issues[0].message,
      });
    }

    const { value, fromUnit, toUnit } = parsedData.data;

    const result = convertLength(value, fromUnit, toUnit).toFixed(2);

    const fromAbbr = lengthAbbr[fromUnit];
    const toAbbr = lengthAbbr[toUnit];

    res.render('length', {
      title: 'Unit Converter - Length',
      currentPage: 'length',
      units: lengthUnits,
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
