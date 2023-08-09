import { UserData } from "../../types/User";
import React from "react";
import {
  sortUserData,
  addDate,
  filterActiveUsers,
  printUserData,
} from "./helpers";

const UserTable: React.FC<UserData> = ({ data }) => {
  const dataWithDates = addDate(data);
  const activeUsers = filterActiveUsers(dataWithDates);
  printUserData(activeUsers);
  return <p>Table</p>;
};

export default UserTable;
