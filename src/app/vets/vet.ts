import {Speciality} from './speciality';

export class Vet {
  id: number;
  firstName: string;
  lastName: string;
  photo: string;
  specialities: Speciality[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    photo: string,
    specialities: Speciality[]
  ) {
  }
}
