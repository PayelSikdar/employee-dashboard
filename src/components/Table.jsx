import React, { useState } from 'react'
import "./Table.css"
import { IoMdAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import AddModal from './AddModal';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';


function Table() {
    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const [newEmployee,setNewEmployee] = useState({id:new Date().getTime().toString()*Math.random(),name:"",email:"",address:"",phone:""});
    const [rows, setRows] = useState([{
        id:new Date().getTime().toString()*Math.random(),
        name: "payel sikdar",
        email: "payelsikdar321@gmail.com",
        address: "sodepur",
        phone: "9875670465"
    }, {
        id:new Date().getTime().toString()*Math.random(),
        name: "payel sikdar",
        email: "payelsikdar321@gmail.com",
        address: "sodepur",
        phone: "9875670465"
    }, {
        id:new Date().getTime().toString()*Math.random(),
        name: "Priyanka Chopra",
        email: "chopra321@gmail.com",
        address: "sodepur",
        phone: "9875670465"
    }, {
        id:new Date().getTime().toString()*Math.random(),
        name: "Ananya Pandey",
        email: "pandey321@gmail.com",
        address: "sodepureeeeeeeee",
        phone: "9875670465"
    
    }, {
        id:new Date().getTime().toString()*Math.random(),
        name: "Varun Dhawan",
        email: "dhawan321@gmail.com",
        address: "sodepureeeeeeeee",
        phone: "9875670465"

    }, {
        id:new Date().getTime().toString()*Math.random(),
        name: "Disha patni",
        email: "disha321@gmail.com",
        address: "sodepureeeeeeeee",
        phone: "9875670465"
    
    }, {
        id:new Date().getTime().toString()*Math.random(),
        name: "karan johar",
        email: "dharmaproduction321@gmail.com",
        address: "sodepureeeeeeeee",
        phone: "9875670465"
    }]);
    const deleteEmployee = () => {
        setDeleteModal(true)
    }
    const addEmployee = () => {
        setAddModal(true)
        console.log("payel")
    }
    const editEmployee = (id)=>{
        console.log("add one employee")
        setUpdateModal(true)
        let employeeToEdit = rows.find((row)=>{
            return id===row.id
        })
        console.log(employeeToEdit)
        setNewEmployee(employeeToEdit)
       
        
    }
    const deleteOneEmployee = (id)=>{
        console.log("delete one employee")
       console.log(id)
       setRows(rows.filter((row)=>{
        return id!==row.id
       }))
    }
   
    return (
        <div>
            <h1 className='heading'>
                <span>Manage Employees</span>
                <div>
                    <button className="delete-icon" onClick={deleteEmployee}><FaCircleMinus /> Delete</button>
                    <button className="add-icon" onClick={addEmployee}><IoMdAddCircle /> Add New Employee</button>
                </div>
            </h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => {
                        return (
                        <tr  key={index}>
                            <td><input type="checkbox" /></td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.address}</td>
                            <td>{row.phone}</td>
                            <td>
                                <FaPencil className="pencil-icon" onClick={()=>editEmployee(row.id)}/>
                                <FaTrash className="trash-icon" onClick={()=>deleteOneEmployee(row.id)}/>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <div className='last-row'>
                <span>showing 5 out of 25entries</span>

                <div className="pagination">
                    <a href="/">Previous</a>
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                    <a href="/">5</a>
                    <a href="/">6</a>
                    <a href="/">Next</a>
                </div>

            </div>
            {addModal && <AddModal setRows={setRows} rows={rows} setAddModal={setAddModal} editEmployee={editEmployee} newEmployee={newEmployee} setNewEmployee={setNewEmployee}/>}
            {
                deleteModal && <DeleteModal setDeleteModal={setDeleteModal} setRows={setRows}/>
            }
            {
                updateModal && <UpdateModal setUpdateModal={setUpdateModal} setRows={setRows} newEmployee={newEmployee} setNewEmployee={setNewEmployee} rows={rows}/>
            }
        </div>
    )
}

export default Table
