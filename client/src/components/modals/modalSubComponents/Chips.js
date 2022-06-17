import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import "../../../iErase.css"

const Chips = ({ task }) => {

    useEffect(() => {
        var elems = document.getElementById('chip');
        M.Chips.init(elems, {
            data: task.tags
        })
    }, [ task ]);

  return (
    <div className="chips" id="chip" ></div>
  );
};


export default Chips;