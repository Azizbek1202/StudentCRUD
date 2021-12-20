import React, {useState, useEffect} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const EditContact = () => {

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [number, setNumber]=useState('');


    const {id} = useParams()
    const contacts=useSelector(state=>state)
    const dispatch=useDispatch()
    const history= useHistory()
    const currentContact=contacts.find(contacts=>contacts.id===parseInt(id))
    
    useEffect(() => {
        if(currentContact){
               setName(currentContact.name);
               setEmail(currentContact.email);
               setNumber(currentContact.number);
        }
    }, [currentContact])
   
    const editContact=(e)=>{
        e.preventDefault();
        const checkEmail=contacts.find(contact=>contact.id!==parseInt(id) && contact.email===email)
        const checkNumber=contacts.find(contact=>contact.id !==parseInt(id) && contact.number===parseInt(number))
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
            
            id: parseInt(id),
            name,
            email,
            number
        }
        dispatch({type:'UPDATE_CONTACT', payload: data})
        toast.success("Student malumotlari yangilandi")
        history.push('/')
    }
    return (
        <div className="container">
            {currentContact ? (
                <>
                <div className="row">
                <div className="display-3 text-center">
                    Edit Student {parseFloat(id)+1}
                </div>
                  <div className="col-md-6 shadow mx-auto p-5">
                     <form onSubmit={editContact}>
                         <div className="input-group">
                             <input type="text" placeholder="Name"  className="form-control my-3" value={name} onChange={e=>setName(e.target.value)}/>
                         </div>
                         <div className="input-group">
                             <input type="email" placeholder="Email"  className="form-control my-3" value={email} onChange={e=>setEmail(e.target.value)}/>
                         </div>
                         <div className="input-group">
                             <input type="number" placeholder="Number"  className="form-control my-3" value={number} onChange={e=>setNumber(e.target.value)}/>
                         </div>
                         <div className="input-group d-flex justify-content-between">
                             <input type="submit" value="Update Student" className="btn btn-block btn-dark mt-3"/>
                             <Link to="/" className="btn btn-danger mt-3 ">
                                 Cancel
                             </Link>
                         </div>
                     </form>
                  </div>
            </div>
                </>
            ):(
                <h1 className="display-3 my-5 text-center">
                    Bunday id ${id} dagi Student topilmadi!!!
                </h1>
            )}
            
        </div>
    )
}

export default EditContact
