
import "./AddModal.css"


function AddModal({ setRows, rows, setAddModal, newEmployee, setNewEmployee }) {

  const handleAddClick = (e) => {
    e.preventDefault();
    if (newEmployee.name && newEmployee.email && newEmployee.address && newEmployee.phone) {
      setRows(rows.concat(newEmployee));
      setAddModal(false)
      setNewEmployee({ name: "", email: "", address: "", phone: "" });
    }
    else{
      alert("Please fill all fields")
    }
  }
    const handleAddChange = (event) => {
      setNewEmployee({
        ...newEmployee,
        [event.target.name]: event.target.value
      })
    }
    const Close = (e) => {
      if (e.target.id === "cross-icon") {
        setAddModal(false)
      }
    }


    return (
      <div className='modal-container'>
        modal
        <div className="modal">
          <h1>Add Employee</h1>
          <i className="fa fa-close" id="cross-icon" style={{ fontSize: "24px", fontWwight: "400" }} onClick={Close}></i>

          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={handleAddChange} value={newEmployee.name} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={handleAddChange} value={newEmployee.email} />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea name="address" onChange={handleAddChange} value={newEmployee.address} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" onChange={handleAddChange} value={newEmployee.phone} />
            </div>
            <div className='modal-bottom'>
              <button className='cancel-button' onClick={()=>setAddModal(false)}>Cancel</button>
              <button className='add-button' type="submit" onClick={handleAddClick}>Add</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  export default AddModal
