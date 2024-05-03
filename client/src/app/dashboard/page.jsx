"use client";

import { useEffect, useState } from "react";
import { productFields } from "@/app/json/productField";
import Button from "@/app/components/base/button";
import Modal from "@/app/components/modal";
import Formgroup from "@/app/components/formGroup";
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/16/solid';

const Dashboard = () => {
    const [inventory, setInventory] = useState([]);
    const [modalConfig, setModalConfig] = useState({});
    const [modalState, setModalState] = useState(false);
    const [formData, setFormData] = useState({});

    const handleModalConfig = (operation, data) => {
        let modalHeader = operation === 'Add' ? 'Add Product' : 'Edit Product';
        let modalBtn = { primary: operation === 'Add' ? 'Add' : 'Update', secondary: 'Cancel' };
        let modalType = operation;

        if (data) {
            setFormData({ ...data });
        }

        setModalState(!modalState);
        setModalConfig({ modalHeader, modalBtn, modalType });
    };

    const handleSubmit = (from) => {
        let url = from === 'Edit' ? `/${formData._id}/edit` : '';
        fetch(`http://localhost:5000/api/inventory${url}`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(res => {
                setModalState(!modalState);
                fetchUsers();
            });
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/inventory/${id}/delete`, { method: 'POST' })
            .then(res => res.json())
            .then(res => fetchUsers());
    };

    const fetchUsers = () => {
        fetch('http://localhost:5000/api/inventory')
            .then(res => res.json())
            .then(res => setInventory([...res.inventories]));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            {/* Header */}

            <div className="relative mx-auto max-w-4xl mt-12 justify-content: flex-end align-items: flex-end">

                <table className="table shadow-md rounded-lg w-full mb-12">
                    <thead className="bg-[#edc0c0]">
                        <tr>
                            <th className="px-4 py-2 font-medium text-gray-700">Product Name</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Description</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Unit Price</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Quantity</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Location</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item, index) => (
                            <tr key={index} className={`hover:bg-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                                <td>{item.name ? item.name : '--'}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.location}</td>
                                <td>
                                    <div className='px-4 py-2 border-b border-gray-200'>
                                        <p onClick={() => handleModalConfig('Edit', item)}><PencilSquareIcon className='h-5 cursor-pointer' /></p>
                                        <TrashIcon className='h-5 ml-2 cursor-pointer' onClick={() => handleDelete(item._id)} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="">
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleModalConfig('Add')} name={'Add Product'} />
                </div>
            </div>

            <Modal
                modalHeader={modalConfig.modalHeader}
                modalBody={productFields.map((field, index) => (
                    <div key={`${field}-${index}`}>
                        <Formgroup form={field} handleForm={{ formData, setFormData }} />
                    </div>
                ))}
                modalBtn={modalConfig.modalBtn}
                modalState={modalState}
                modalType={modalConfig.modalType}
                handleModalState={setModalState}
                handleModalAction={handleSubmit}
            />
        </>
    );
};

export default Dashboard;
