import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

//stateless vs stateful
// class DisplayInfor extends React.Component {
 
//   render() {
//     console.log(">>> call me render ");
//     //destructuring array/object
//     //const listusers = this.props.listUsers;
//     const { listUsers } = this.props;
//     // console.log(listUsers);
//     // console.table(listUsers);
//     //props => viết tất properties

//     //template + logic js
//     return (
//       <div className="display-infor-container">
  
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name's {user.name}</div>
//                     <div>My age's {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {  
  const { listUsers } = props;
  
  const[isShowHideListUser, setShowHideListUser] = useState(true);
  // this.state = {
  //   isShowHideListUser: true
  // }
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  }

    return (
      <div className="display-infor-container">
        <div>
          <span onClick={() => handleShowHideListUser()}>
            {isShowHideListUser === true
              ? "Hide list Users"
              : "Show list Users"}
          </span>
        </div>
        {isShowHideListUser && (
          <>
            {listUsers.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>
                    <div>My name's {user.name}</div>
                    <div>My age's {user.age}</div>
                  </div>
                  <div>
                    <button onClick={() => props.handleDeleteUser(user.id)}>
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }

export default DisplayInfor;
