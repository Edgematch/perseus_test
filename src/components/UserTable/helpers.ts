import { User, UserWithDate } from "../../types/User";
import moment from "moment";

export const addDate = (data: Array<User> = []) => {
  return data.map((user) => ({ ...user, Date: moment().format("L") }));
};

export const filterActiveUsers = (data: Array<UserWithDate>) => {
  return data.filter((user) => user.Status === "Active");
};

export const printUserData = (data: Array<UserWithDate>) => {
  if (data.length < 0) console.log("No active Users");
  data.forEach((user) =>
    console.log(
      `Name: ${user.Name}, Date: ${user.Date}, Favorite Movie: ${user.FavoriteMovie}`
    )
  );
};

export const sortUserData = (
  data: Array<UserWithDate>,
  propertyName: keyof UserWithDate,
  order: string
) => {
  const sortedData = data.sort((a, b) => {
    if (a[propertyName] < b[propertyName]) {
      return -1;
    }
    if (a[propertyName] > b[propertyName]) {
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
