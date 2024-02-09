import React from 'react'
import "./AddModal.css"
import "./DeleteModal.css"
function DeleteModal({ setDeleteModal, setRows }) {
    const closeDeleteModal = (e) => {
        if (e.target.id === "cross-icon") {
            setDeleteModal(false)

        }
    }
    const handleDeleteClick = () => {
        setRows([])
        setDeleteModal(false)
    }
    return (
        <div>
            <div className='modal-container'>
                modal
                <div className="delete-modal">
                    <h1>Add Employee</h1>
                    <i className="fa fa-close" id="cross-icon" style={{ fontSize: "24px", fontWwight: "400" }} onClick={closeDeleteModal}></i>

                    <div className='delete-modal-height'>
                        <div>Are you sure you want to delete this Records?</div>
                        <span className='warning'>This action cannot be undone</span>
                    </div>
                    <div className='modal-bottom'>
                        <button className='cancel-button'  onClick={()=>setDeleteModal(false)}>Cancel</button>
                        <button className='delete-button' type="submit" onClick={handleDeleteClick}>Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DeleteModal
