import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const { searchUsers, clearUsers } = githubContext;
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alert("Input must not be empty ...");
      return;
    }
    searchUsers(text);
    setText("");
  };

  const handleClear = (event) => {
    event.preventDefault();
    clearUsers();
  };
  return (
    <div>
      <form className="form">
        <input
          name="text"
          value={text}
          onChange={handleChange}
          className=""
          type="text"
        />
        <input
          onClick={handleSubmit}
          className="btn btn-dark btn-block"
          type="submit"
        />
        <button className="btn btn-light btn-block" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Search;
