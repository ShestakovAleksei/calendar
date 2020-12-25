export enum UserRealm {
  FRONT_END = 'Frontend Team',
  BACK_END = 'Backend Team',
  DESIGNER = 'Designers',
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  realm: UserRealm;
}
