import { UserData, UserWithDate } from "../../types/User";
import React, { useMemo, useState } from "react";
import {
  sortUserData,
  addDate,
  filterActiveUsers,
  printUserData,
} from "./helpers";

const UserTable: React.FC<UserData> = ({ data }) => {
  const [sortedItem, setSortedItem] = useState({
    property: "Name",
    asc: true,
  });

  const onPropertyChange = (property: keyof UserWithDate) => {
    if (sortedItem.property === property) {
      setSortedItem({ ...sortedItem, asc: !sortedItem.asc });
    } else {
      setSortedItem({ ...sortedItem, property: property });
    }
  };

  const sortedUserDate = useMemo(() => {
    const dataWithDates = addDate(data);
    const activeUsers = filterActiveUsers(dataWithDates);
    const property = sortedItem.property as keyof UserWithDate;
    const asc = sortedItem.asc ? "ascending" : "descending";
    const sortedData = sortUserData(activeUsers, property, asc);
    return sortedData;
  }, [data, sortedItem]);

  printUserData(sortedUserDate);
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button type="button" onClick={() => onPropertyChange("Name")}>
              Name
            </button>
          </th>

          <th>
            <button type="button" onClick={() => onPropertyChange("Date")}>
              Date
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => onPropertyChange("FavoriteFood")}
            >
              Favorite Food
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => onPropertyChange("FavoriteMovie")}
            >
              Favorite Movie
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUserDate.map((user, index) => (
          <tr key={index}>
            <td>{user.Name}</td>
            <td>{user.Date}</td>
            <td>{user.FavoriteFood}</td>
            <td>{user.FavoriteMovie}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
