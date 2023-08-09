export type User = {
  Name: string;
  FavoriteFood: string;
  FavoriteMovie: string;
  Status: string;
  Date?: string;
};

export type UserWithDate = {
  Name: string;
  FavoriteFood: string;
  FavoriteMovie: string;
  Status: string;
  Date: string;
};

export type UserData = {
  data: User[];
};
