import { UserData } from "../../types/User";
import React from "react";
import { sortUserData, addDate, filterActiveUsers } from "./helpers";

const UserTable: React.FC<UserData> = ({ data }) => {
  const dataWithDates = addDate(data);
  const activeUsers = filterActiveUsers(dataWithDates);
  console.log(activeUsers.length ? activeUsers : "No active Users");
  return <p>Table</p>;
};

export default UserTable;
