import { Schema, model } from 'mongoose';
import { TDepartment } from './department.interface';

const DepartmentSchema = new Schema<TDepartment>(
  {
    name: {
      type: String,
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'FacultyModel',
    },
  },
  {
    timestamps: true,
  },
);

DepartmentSchema.pre('save', async function (next) {
  const isDepatmentExists = await this.model().findOne({
    name: this.name,
  });

  if (isDepatmentExists) {
    throw new Error('semester is allReady exists');
  } else {
    next();
  }
});

DepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDepatmentExists = await DepartmentModel.findOne(query);
  if (!isDepatmentExists) {
    throw new Error('department is allReady exists');
  } else {
    next();
  }
});

export const DepartmentModel = model<TDepartment>(
  'Department',
  DepartmentSchema,
);
