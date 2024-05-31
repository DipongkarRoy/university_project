
type TMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcademicSemester = {
  name: 'Autumn' | 'Summer' | 'Fall';
  code: '01' | '02' | '03';
  year: string;
  startMonth: TMonth;
  endMonth: TMonth;
};




export type TsemesterNameCodeMapper ={
  [key:string]:string ;
};

export const semesterMapper:TsemesterNameCodeMapper= {
  Autumn :'01',
  Summer:'02',
  Fall:'03'
}
