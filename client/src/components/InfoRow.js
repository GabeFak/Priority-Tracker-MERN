import React from 'react';
import { useContext, useEffect } from 'react';
import Search from './Search';
import UserDataContext from '../context/UserData/UserDataContext';
import InfoRowTask from './InfoRowTask';
import Alerts from './Alerts';
import AlertContext from '../context/Alert/AlertContext';
import M from 'materialize-css/dist/js/materialize.min.js';

const InfoRow = ({ cat }) => {
    const userDataContext = useContext(UserDataContext);
    const { userData, filtered, clickCurrentFilter, curtentStateCat } = userDataContext;

    const alertContext = useContext(AlertContext);
    const { alerts } = alertContext;

    useEffect(() => {
        const elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
        // eslint-disable-next-line
    }, [])

    const setColor = () => {
        switch (cat) {
            case 'backlog':
                return "colour-1"
            case 'started':
                return "colour-2"
            case 'inProgress':
                return "colour-3"
            case 'finished':
                return "colour-4"
            default:
                break;
        };
    };

    const selectCat = () => {
        switch (cat) {
            case 'backlog':
                return "Back Log Tasks"
            case 'started':
                return "Started Tasks"
            case 'inProgress':
                return "Tasks In Progress"
            case 'finished':
                return "Finished Tasks"
            default:
                break;
        };
    }
 

    return (
        <div className="col s3" style={{overflow: "scroll", height: "100vh", paddingBottom: "64px", paddingLeft: "unset", paddingRight: "unset", msOverflowStyle: "none", scrollbarWidth: "none"}}>
            <Search cat={cat}/>
            {/* <div style={{ marginBottom: "55px" }}></div> */}
            <div className='psudo-spacer'></div>

            <ul className={`collapsible ${setColor()}`} style={{"pointerEvents": "none"}}>
                <li>
                    <div className={`collapsible-header box-spacer-3 ${setColor()}`} style={{"display": "flex", "justifyContent": "center"}}>
                            <div className='task-name'>{selectCat()}</div>
                    </div>
                </li>
            </ul>
                {alertContext !== undefined && 
                    <>
                        {alerts[0] !== undefined && 
                            <>
                                {cat === 'backlog' && alerts[0].alertClass === 1 && <Alerts />}
                                {cat === 'started' && alerts[0].alertClass === 2 && <Alerts />}
                            </>
                        }
                    </>
                }

            {filtered !== null && clickCurrentFilter !== null && curtentStateCat === cat ?
                <>
                    {filtered.map((data, index) => {
                            return <InfoRowTask key={index} taskInfo={data} cat={cat}/>          
                        })
                    }
                </>
            :
                <>
                    {userData.map((data, index) => {
                        if(data.category === cat) {
                            return <InfoRowTask key={index} taskInfo={data} cat={cat}/>
                        };
                    })
                    }
                </>
            }
        </div>
    )
};

export default InfoRow;