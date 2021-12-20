import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import nextId from 'react-id-generator';
import { useHistory } from 'react-router-dom';


const AddContact = () => {
    let htmlid=nextId()
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [number, setNumber]=useState('');

    const contact=useSelector((state)=>state)
    // eslint-disable-next-line no-undef
    const dispatch=useDispatch()
    const history= useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const checkEmail=contact.find(contact=>contact.email===email && contact)
        const checkNumber=contact.find(contact=>contact.number===parseInt(number))
        if(!name || !email || !number){
            return toast.warning("Ustunlar to'liq emas")
        }
        if(checkEmail){
            return toast.error("Bu emaildan foydalanilgan")
        }
        if(checkNumber){
            return toast.error("Bu Nomerdan foydalanilgan")
        }
        const data={
            id: contact[contact.length-1].id+1,
            name,
            email,
            number
        }
        dispatch({type:'ADD_CONTACT', payload: data})
        toast.success("Student Muvaffaqyatli qo'shildi")
        history.push('/')
    }
    return (
        <div className="container">
            <div className="row">
                <div className="display-3 text-center">
                    Add Contact
                </div>
                  <div className="col-md-6 shadow mx-auto p-5">
                     <form onSubmit={handleSubmit}>
                         <div className="input-group">
                             <input type="text" placeholder="Name"  className="form-control my-3" value={name} onChange={e=>setName(e.target.value)}/>
                         </div>
                         <div className="input-group">
                             <input type="email" placeholder="Email"  className="form-control my-3" value={email} onChange={e=>setEmail(e.target.value)}/>
                         </div>
                         <div className="input-group">
                             <input type="number" placeholder="Number"  className="form-control my-3" value={number} onChange={e=>setNumber(e.target.value)}/>
                         </div>
                         <div className="input-group">
                             <input type="submit" value="Add Student" className="btn btn-block btn-dark mt-3"/>
                         </div>
                     </form>
                  </div>
            </div>
        </div>
    )
}
 export default AddContact

