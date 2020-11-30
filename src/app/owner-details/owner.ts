import {Pet} from '../pet-details/pet';
import {User} from '../users/users';

export class Owner {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  telephone: string;
  user: User;
  pets: Pet[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    telephone: string,
    user: User,
    pets: Pet[]
  ) {
  }
}
