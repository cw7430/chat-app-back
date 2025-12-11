import { z } from 'zod';

const zodHelper = {
  zBigIntToString: z.bigint().transform((val: bigint) => val.toString()),
  zStringToBigInt: z.string().transform((val: string) => BigInt(val)),
  zNumberToString: z.number().transform((val: number) => val.toString()),
  zStringToNumber: z.string().transform((val: string) => Number(val)),
};

export default zodHelper;
