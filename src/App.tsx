import "./App.css";
import UserTable from "./components/UserTable";
import userData from "./__mocks__/userData.json";

const App = () => {
  const userDataCopy = userData;

  return (
    <>
      <h1>Users</h1>
      <UserTable data={userDataCopy} />
    </>
  );
};

export default App;
