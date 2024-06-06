import { z } from 'zod';

const Reg_semesterValiDate = z.object({
  body: z.object({
    academicSemester: z.string(),
    status: z.enum(['upcomeing', 'ongoing', 'ended']),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    minCredit: z.number().optional(),
    maxCredit: z.number().optional(),
  }),
});
const updateReg_semesterValiDate = z.object({
  body: z.object({
    academicSemester: z.string().optional(),
    status: z.enum(['upcomeing', 'ongoing', 'ended']).optional(),
    startDate: z.string().datetime().optional(),
    endDate: z.string().datetime().optional(),
    minCredit: z.number().optional(),
    maxCredit: z.number().optional(),
  }),
});

export const Reg_semesterValiDation = {
  Reg_semesterValiDate,
  updateReg_semesterValiDate,
};
