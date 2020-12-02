import {PetType} from './petType';
import {Owner} from '../owner-details/owner';

export class Pet {
  id: string;
  name: string;
  petType: PetType;
  owner: Owner;
  birthDate: string;

  constructor(
    id: string,
    name: string,
    petType: PetType,
    owner: Owner,
    birthDate: string
  ) {
  }
}
