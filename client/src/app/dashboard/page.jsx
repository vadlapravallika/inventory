"use client"

import {useState} from "react"
import {productFields} from "@/app/json/productField"
import Button from "@/app/components/base/button"
import Modal from "@/app/components/modal"
import Formgroup from "@/app/components/formGroup"

const Dashboard =() => {
    const [modalConfig, setModalConfig] = useState({})
    const [modalState, setModalState] = useState(false)
    const [formData, setFormData] = useState({})

    const handleModalConfig = (operation) => {
        let modalHeader = operation == 'Add' ? 'Add Product' : 'Edit Product'
        let modalBtn = {primary: operation == 'Add' ?  'Add' : 'Update', secondary: 'Cancel'}
        let modalType = operation

        setModalState(!modalState)
        setModalConfig({modalHeader, modalBtn,modalType})
    }

    const handleSubmit = (from) => {
        fetch('http://localhost:5000/api/inventory',
            {   
                method: 'POST',
                body: JSON.stringify(formData),
                headers:{
                    'Content-Type': 'application/json',
                    }
            })
            .then(res => res.json())
            .then(res => console.log(res))
    }
    return <>
            {/* Header */}
            
            <div>
                <Button onClick={() => handleModalConfig('Add')} name={'Add Product'}/>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <Modal 
                modalHeader={modalConfig.modalHeader}
                modalBody={
                    <>
                        {
                            productFields.map((field, index) => {
                                return <>
                                        <div key={`field-${index}`}>
                                            <Formgroup form={field} handleForm={{formData , setFormData}} />
                                        </div>
                                    </>
                            })
                        }
                    </>
                }
                modalBtn={modalConfig.modalBtn}
                modalState={modalState}
                modalType={modalConfig.modalType}
                handleModalState={setModalState}
                handleModalAction={handleSubmit}
            />
        </>
}

export default Dashboard