// Name: EDGAR FERNANDO MELARA GUEVARA
// Development Date: 08/09/ 2023
// Purpose of the script: Create a small application to display user profiles depending on business logic

How to approach this requirement?

- Do you understand the acceptance criteria?
- Does the feature can be splited into smaller task?
- How much effort it will take? 
- Do you need to spike the feature first?


To deliver this requirement I created a separate repo with to branches

The first branch has the code to console.log user data  branch->[feat.consoleLogUserData](https://github.com/Edgematch/perseus_test/tree/feat.consoleLogUserData)

The solution is as follows

I created a component for the main page called Apps.tsx, this is where I call a child component called TableData
```
//App.tsx
import "./App.css";
import UserTable from "./components/UserTable";
// import userData from "./__mocks__/userData.json";

const App = () => {
  // const userDataCopy = userData;
  let rockyObj = {
    Name: "Rocky",
    FavoriteFood: "Sushi",
    FavoriteMovie: "Back to The Future",
    Status: "Inactive",
  };
  let miroslavObj = {
    Name: "Miroslav",
    FavoriteFood: "Sushi",
    FavoriteMovie: "American Psycho",
    Status: "Active",
  };
  let donnyObj = {
    Name: "Donny",
    FavoriteFood: "Singapore chow mei fun",
    FavoriteMovie: "The Princess Bride",
    Status: "Inactive",
  };
  let mattObj = {
    Name: "Matt",
    FavoriteFood: "Brisket Tacos",
    FavoriteMovie: "The Princess Bride",
    Status: "Active",
  };

  const userData = [rockyObj, miroslavObj, donnyObj, mattObj];

  return (
    <>
      <h1>Users</h1>
      <UserTable data={userData} />
    </>
  );
};

export default App;

```

To separate the logic form the componen I created a separted helper file

```
//helpers.ts
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
``` 

Typescript types
```
//User.ts
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
```

Finally I use all the helper functions in UserTable component to print userData
```
//UserTable.tsx

User
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
```

The full feature with the sortable table is in the main branch of the repo ->[Main Branch](https://github.com/Edgematch/perseus_test/tree/main)
