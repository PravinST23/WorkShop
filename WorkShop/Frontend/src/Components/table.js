import axios from "axios";
import React, { useState, useEffect } from "react";
import './form.css';
import { Link } from "react-router-dom";
export default function Table1() {
  const [data, setData] = useState([]);

  function init() {
    axios.get("http://localhost:8080/findall")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteData = (bookId) => {
    axios.delete(`http://localhost:8080/delete${bookId}`)
      .then((response) => {
        const newdata = data.filter((item) => item.bookId !== bookId);
        setData(newdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateData = async (data) => {
    data["bookName"] = prompt("Enter new name");
    data["authorName"] = prompt("Enter new name");
    data["price"] = parseInt(prompt("Enter new price"));
    data["publishedOn"] = prompt("Enter new date");

     await axios.put(`http://localhost:8080/updatedata`, data);
      window.location.reload();
  }

  useEffect(() => {
    init();
  }, []);

  return (
    
    <div className="table">
    <h1>Book Details</h1>
    <table border={1}>
      <thead>
        <tr>
          <th>BookId</th>
          <th>BookName</th>
          <th>AuthorName</th>
          <th>Price</th>
          <th>PublishedOn</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.bookId}>
            <td>{user.bookId}</td>
            <td>{user.bookName}</td>
            <td>{user.authorName}</td>
            <td>{user.price}</td>
            <td>{user.publishedOn}</td>
            <td>
            <button
            className="btn btn-primary"
            onClick={() => deleteData(user.bookId)}
          
          >
            Delete
          </button>
          </td>
          <td>
          <button className="btn btn-secondary"
            onClick={() => updateData(user)}>
            Update
          </button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Link to="/">back</Link>
    </div>

  );
}

