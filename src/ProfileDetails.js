import React, { useState, useEffect, } from 'react';
import {getUsers} from './users.js';
import {getedUsers} from './ownDetails.js';
import Datatable from './Datatable.js';
import "./ProfileDetails.css"
import {Link} from "react-router-dom";


function ProfileDetails() {

  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);
  const [q, setQ] = useState('');
  const [searchColumns, setSearchColumns] = useState([
    'first_name',
    'last_name',
  ]);
    const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(12);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);


  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };


  

  useEffect(() => {  getUsers()
    .then(items => {
      setUsers(items);
      console.log(items);
    })
  }, [users]);
  console.log(users); 
  
  useEffect(() => {  getedUsers()
    .then(items => {
      setUsers1(items);
      console.log(items);
    })
  }, [users1]);
  console.log(users1);
  
  var mainUser = [...users, ...users1]
  console.log(mainUser);

  const pages = [];
  for (let i = 1; i <= Math.ceil(mainUser.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mainUser.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1,
      ),
    );
  }
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });


  const columns = mainUser[0] && Object.keys(mainUser[0]);


    return (
      <div className = "details">
      <div>
        <div style = {{textAlign:"center"}}>
        <Link to="/">Return to Home Page</Link>
        </div>
        <div className='cd-table-container'>
        <h1 style ={{color:"brown"}}>User Details</h1>
        <div className ="cd-search">
      <div style = {{width:"250px", height:"45px"}}>
        <input
          type='text'
          placeholder='Search'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      </div>
        <div>
          <Datatable data ={search(currentItems)}/>
          </div>
          <div>
          <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      </div>
          </div>
          
          </div>
          </div>
  );
}
export default ProfileDetails;

