import {Specialities} from './specialities';

export class Vets {
  id: number;
  firstName: string;
  lastName: string;
  specialities: Specialities[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    specialities: Specialities[]
  ) {
  }
}