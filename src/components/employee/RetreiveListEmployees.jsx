import React , { useState, useEffect, useRef } from 'react'
import { listEmployees } from './services/EmployeeService';
import { useNavigate } from 'react-router-dom'

const RetreiveListEmployees = () => {

    const [employee, setEmployees] = useState([])
    const navigator = useNavigate()
    const empRef = useRef(false)
    const [dataEmployees, setDataEmployees] = useState([])
    const REST_BASE_URL ='http://localhost:8082/api/employees'

    useEffect(() => {
        if(empRef.current === false) {
            console.info("Values are ::1")
            const setEmployees = async() => {
                const response = await fetch(REST_BASE_URL)
                const dataEmployees = await response.text()
                console.log('Json is '+ dataEmployees)
            }

            setEmployees()

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
        <h2> New - ListEmployees</h2>
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
                        dataEmployees.map(employee => 
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

export default RetreiveListEmployees