export interface Registration {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export type RegistrationBody = Pick<
  Registration,
  'email' | 'firstName' | 'lastName'
>;
