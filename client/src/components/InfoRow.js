import React from 'react';
import { useEffect, useContext } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Search from './Search';
import UserDataContext from '../context/UserData/UserDataContext';
import InfoRowTask from './InfoRowTask';

const InfoRow = ({ cat }) => {
    const userDataContext= useContext(UserDataContext);
    const { userData } = userDataContext;

  

    // useEffect(() => {
    //     const elems = document.querySelectorAll('.collapsible');
    //     M.Collapsible.init(elems, {});
       
    // }, []);

  return (
    <div className="col s3" style={{overflow: "scroll", height: "100vh", paddingBottom: "64px", paddingLeft: "unset", paddingRight: "unset", msOverflowStyle: "none", scrollbarWidth: "none"}}>
        <Search cat={cat}/>
        <div style={{marginBottom: "55px"}}></div>
            {userData !== null && userData.map((data, index) => {
                if(data.category === cat) {
                    // console.log(data)
                    return <InfoRowTask key={index} taskInfo={data}/>
                };
                })
            }
    </div>
  )
}

export default InfoRow;