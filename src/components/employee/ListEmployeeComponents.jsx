import React , { useState, useEffect, useRef } from 'react'
import { listEmployees } from './services/EmployeeService'
import { useNavigate } from 'react-router-dom';


const ListEmployeeComponents = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate()
    const empRef = useRef(false)


    useEffect(() => {
        if(empRef.current === false) {
            console.info("Values are ::1")
            listEmployees().then((response) => {
                setEmployees(response.data)
                return () => setEmployees
            }).catch(error => {
                console.error(error)
            })
        }
        
        return () => {
            empRef.current = true;
        }
        
    }, [])


 function addNewEmployee() {
    navigator('/addEmployees');
 }


  return (
    <div className='container'>
        <h2> ListEmployees</h2>
        <button className="btn btn-success" onClick={addNewEmployee}>Add</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id </th>
                    <th>Employee First Name </th>
                    <th>Employee Last Name </th>
                    <th>Employee Address </th>
                    <th>Employee Email </th>
                </tr>                
                </thead>
                <tbody>
                    {
                        employees.map(employee => 
                            <tr key={employee.id}>
                               <td>{employee.id}</td> 
                               <td>{employee.firstName}</td>
                               <td>{employee.lastName}</td>
                               <td>{employee.address}</td>
                               <td>{employee.email}</td>    
                            </tr>
                    )
                    }
                    
                </tbody>
        </table>
        
        
    </div>
  )
}

export default ListEmployeeComponents