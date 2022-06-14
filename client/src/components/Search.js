import React from 'react';

const Search = () => {
    return (
    <div style={{position: "fixed", zIndex: "0", top: "64px", backgroundColor: "white", width: "inherit", marginBottom: "55px", display: 'flex', flexDirection: "row"}}>
        <div style={{height: "58px",display: 'flex', alignItems: "center"}}><i className="material-icons">control_point</i></div>
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