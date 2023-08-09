import { UserData } from "../../../types/User";
import { sortUserData, filterActiveUsers, addDate } from "../helpers";

describe("test helpers", () => {
  // Tests that addDate function returns an array of users with Date property added
  it("should add Date property to each user in the array", () => {
    const input = [
      {
        Name: "John",
        FavoriteFood: "Pizza",
        FavoriteMovie: "The Godfather",
        Status: "Active",
      },
      {
        Name: "Jane",
        FavoriteFood: "Sushi",
        FavoriteMovie: "Star Wars",
        Status: "Inactive",
      },
    ];
    const expectedOutput = [
      {
        Name: "John",
        FavoriteFood: "Pizza",
        FavoriteMovie: "The Godfather",
        Status: "Active",
        Date: expect.any(String),
      },
      {
        Name: "Jane",
        FavoriteFood: "Sushi",
        FavoriteMovie: "Star Wars",
        Status: "Inactive",
        Date: expect.any(String),
      },
    ];
    const output = addDate(input);
    expect(output).toEqual(expectedOutput);
  });

  // Tests that filterActiveUsers function returns an array of users with Status property equal to 'Active'
  it("should return an array of users with Status property equal to Active", () => {
    const input = [
      {
        Name: "John",
        FavoriteFood: "Pizza",
        FavoriteMovie: "The Godfather",
        Status: "Active",
        Date: "01/01/2022",
      },
      {
        Name: "Jane",
        FavoriteFood: "Sushi",
        FavoriteMovie: "Star Wars",
        Status: "Inactive",
        Date: "01/01/2022",
      },
      {
        Name: "Bob",
        FavoriteFood: "Burgers",
        FavoriteMovie: "The Matrix",
        Status: "Active",
        Date: "01/01/2022",
      },
    ];
    const expectedOutput = [
      {
        Name: "John",
        FavoriteFood: "Pizza",
        FavoriteMovie: "The Godfather",
        Status: "Active",
        Date: "01/01/2022",
      },
      {
        Name: "Bob",
        FavoriteFood: "Burgers",
        FavoriteMovie: "The Matrix",
        Status: "Active",
        Date: "01/01/2022",
      },
    ];
    const output = filterActiveUsers(input);
    expect(output).toEqual(expectedOutput);
  });

  // Tests that sortUserData function returns a sorted array of users based on the provided property name and order
  it("should return a sorted array of users based on the provided property name and order", () => {
    const input = [
      {
        Name: "John",
        FavoriteFood: "Pizza",
        FavoriteMovie: "The Godfather",
        Status: "Active",
        Date: "01/01/2022",
      },
      {
        Name: "Jane",
        FavoriteFood: "Sushi",
        FavoriteMovie: "Star Wars",
        Status: "Inactive",
        Date: "01/01/2022",
      },
      {
        Name: "Bob",
        FavoriteFood: "Burgers",
        FavoriteMovie: "The Matrix",
        Status: "Active",
        Date: "01/01/2022",
      },
    ];
    const expectedOutput = [
      {
        Name: "Bob",
        FavoriteFood: "Burgers",
        FavoriteMovie: "The Matrix",
        Status: "Active",
        Date: "01/01/2022",
      },
      {
        Name: "Jane",
        FavoriteFood: "Sushi",
        FavoriteMovie: "Star Wars",
        Status: "Inactive",
        Date: "01/01/2022",
      },
      {
        Name: "John",
        FavoriteFood: "Pizza",
        FavoriteMovie: "The Godfather",
        Status: "Active",
        Date: "01/01/2022",
      },
    ];
    const output = sortUserData(input, "Name", "ascending");
    expect(output).toEqual(expectedOutput);
  });
});
