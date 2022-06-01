import "./ProfileDetails.css"

function Datatable({data}){ 
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table className='table' cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {data[0] && columns.map((heading) => <th>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
            }
// return(

// <table>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Company Name</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Zip</th>
//               <th>Web</th>
//               <th>Age</th>
//             </tr>
//  {data.map((user) => (
//    <tr>
//         <td>{user.first_name}</td>
//         <td>{user.last_name}</td>
//         <td>{user.company_name}</td>
//         <td>{user.city}</td>
//         <td>{user.state}</td>
//         <td>{user.zip}</td>
//         <td>{user.web}</td>
//         <td>{user.age}</td>
//         </tr>
//       ))}
//       </table>
//       )

// }


export default Datatable;