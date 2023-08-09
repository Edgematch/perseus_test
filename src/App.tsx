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
