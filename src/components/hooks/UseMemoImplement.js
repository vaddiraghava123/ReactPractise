import axios from 'axios'
import React, { useEffect, useState, useMemo } from 'react'

function UseMemoImplement() {

    const [userData, setUserData] = useState(" ");
    const [toggle, setToggle] = useState(false);
    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setUserData(response.data[0].name);
            });
    }, []);

    const findLongestName = (comments) => {
        if(!comments) return null;
        console.log("THIS WAS COMPUTED");
        return comments;
    }

    const getLongestName = useMemo( () => {
        findLongestName(userData)
    }, [])

    
    return (
        <div className='App'>UseMemoImplement
            <div> {getLongestName}</div>
            <button onClick={ () => {
                setToggle(!toggle);
            }}>Toggle</button> 

            {toggle && <h3> Toggle Flag </h3>}
        </div>
    )
}

export default UseMemoImplement