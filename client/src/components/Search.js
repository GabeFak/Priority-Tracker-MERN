import React from 'react';
import { Fragment } from 'react';

const Search = ({ cat }) => {
    return (
    <div style={{position: "fixed", zIndex: "0", top: "64px", backgroundColor: "white", width: "inherit", marginBottom: "55px", display: 'flex', flexDirection: "row"}}>

        <div style={{height: "58px",display: 'flex', alignItems: "center"}}>
            {cat !== "backlog" && cat !== "started" ? 
                <>
                {cat !== "finished" ?                  
                    ''
                :
                    <a href='#' className='btn-floating modal-trigger red' value="modal"><i className="material-icons" style={{ cursor: "pointer"}} >delete</i></a>
                }
                </>
            :
                <>
                    {cat === "backlog" ?                  
                        <a href='#new-task-modal' className='btn-floating modal-trigger green' value="modal"><i className="material-icons" style={{ cursor: "pointer"}} >control_point</i></a>
                    :
                        <a href='#new-task-modal-started' className='btn-floating modal-trigger green' value="modal"><i className="material-icons" style={{ cursor: "pointer"}} >control_point</i></a>
                    }
                </>
            }
        </div>
        <div className="nav-wrapper" syle={{display: 'flex', alignItems: "center"}}>    
            <form>
                <div className="input-field" >
                    <input id="search" type="search" required style={{margin: "unset"}}/>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Search;