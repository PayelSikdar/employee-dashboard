import React from 'react'

function UpdateModal({UpdateModal,setUpdateModal,newEmployee,rows,setRows,setNewEmployee}) {
    const Close = (e)=>{
        if(e.target.id === "cross-icon"){
         setUpdateModal(false)
        }
       }
       const handleUpdateChange = (event)=>{
        setNewEmployee({
            ...newEmployee,
      [event.target.name]: event.target.value
        })
       }
       const handleEditClick = (e)=>{
        e.preventDefault()
        console.log(newEmployee)
        let newrows = rows
        console.log(newrows)
        for (let i=0 ; i<newrows.length;i++){
            console.log(i)
            if(newrows[i].id === newEmployee.id){
                console.log(newrows[i].id === newEmployee.id)
                newrows[i].name=newEmployee.name
                newrows[i].email=newEmployee.email
                newrows[i].address=newEmployee.address
                newrows[i].phone=newEmployee.phone
                break;
            }
            
        }
        console.log(newrows)

        setRows(newrows)
        setUpdateModal(false)
        setNewEmployee({name:"",email:"",address:"",phone:""})
       }
       
    return (
        <div>
            <div className='modal-container'>
                modal
                <div className="modal">
                    <h1>Edit Employee</h1>
                    <i className="fa fa-close" id="cross-icon" style={{ fontSize: "24px", fontWwight: "400" }} onClick={Close}></i>

                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" onChange={handleUpdateChange} value={newEmployee.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" onChange={handleUpdateChange} value={newEmployee.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea name="address" onChange={handleUpdateChange} value={newEmployee.address} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" onChange={handleUpdateChange} value={newEmployee.phone} />
                        </div>
                        <div className='modal-bottom'>
                            <button className='cancel-button' onClick={()=>setUpdateModal(false)}>Cancel</button>
                            <button className='add-button' type="submit" onClick={handleEditClick}>Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal
