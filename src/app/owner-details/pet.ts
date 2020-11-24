import {PetType} from './petType';
import {Owner} from './owner';

export class Pet {
  id: number;
  name: string;
  petType: PetType;
  owner: Owner;
  birthDate: string;

  constructor(
    id: number,
    name: string,
    petType: PetType,
    owner: Owner,
    birthDate: string
  ) {
  }
}
