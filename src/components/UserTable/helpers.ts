import { User, UserWithDate } from "../../types/User";
import moment from "moment";

export const addDate = (data: Array<User> = []) => {
  return data.map((user) => ({ ...user, Date: moment().format("L") }));
};

export const filterActiveUsers = (data: Array<UserWithDate>) => {
  return data.filter((user) => user.Status === "Active");
};

export const sortUserData = (
  data: Array<UserWithDate>,
  propertyName: string,
  order: string
) => {
  const sortedData = data.sort((a, b) => {
    if (
      a[propertyName as keyof UserWithDate] <
      b[propertyName as keyof UserWithDate]
    ) {
      return -1;
    }
    if (
      a[propertyName as keyof UserWithDate] >
      b[propertyName as keyof UserWithDate]
    ) {
      return 1;
    }
    return 0;
  });

  console.log(sortedData);

  if (order === "descending") {
    return sortedData.reverse();
  }

  return sortedData;
};
