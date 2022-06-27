import React from 'react';
import { useContext, useRef, useEffect } from 'react';
import UserDataContext from '../context/UserData/UserDataContext';
import '../materializeOverride.css';

const Search = ({ cat }) => {
    const userDataContext = useContext(UserDataContext);
    const { deleteFinalRow, setCurrentFilterSelect, filterTasks, filtered, clearFilter } = userDataContext;

    const text = useRef('');

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        };
    }, []);

    const searchFilter = (e) => {
        if(text.current.value !== '') {
            if(!text.current.value.includes('\\')) {
                console.log(text.current.value.indexOf('\\'));
                filterTasks(e.target.value);
            }
        }else{
            clearFilter();
        };
        if(filtered === []) {
            clearFilter();
        };
    };

    const deleteFinishedRow = () => {
        deleteFinalRow();
    };

    const changeSelectState = () => {
        setCurrentFilterSelect(cat);
    };

    const setColor = () => {
        switch (cat) {
            case 'backlog':
                return "colour-1-prime"
            case 'started':
                return "colour-2-prime"
            case 'inProgress':
                return "colour-3-prime"
            case 'finished':
                return "colour-4-prime"
            default:
                break;
        };
    };

    return (
        <div className ={setColor()} style={{position: "fixed", zIndex: "0", top: "64px", width: "inherit", marginBottom: "55px", display: 'flex', flexDirection: "row"}}>
            <div style={{height: "55px",display: 'flex', alignItems: "center"}}>
                {cat !== "backlog" && cat !== "started" ? 
                    <>
                        {cat !== "finished" ?                  
                            ''
                        :
                            <a className='btn-floating red' onClick={deleteFinishedRow}><i className="material-icons" style={{ cursor: "pointer"}} >delete</i></a>
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
                        <input id="search" ref={text} onFocus={changeSelectState} onChange={searchFilter} type="search" required style={{margin: "unset"}}/>
                        <label className="label-icon" htmlFor="search"><i className="material-icons search-icon">search</i></label>
                        {/* <i className="material-icons" style={{display: "inline"}}>close</i> */}
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Search;