import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {
    const contacts = useSelector((state)=>state)
    const dispatch = useDispatch();
    const deleteContact=(id)=>{
       dispatch({type: 'DELETE_CONTACT', payload: id})
       toast.success("Contact o'chirildi ")
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 d-flex justify-content-end ">
                    <Link to='/add' className="btn btn-outline-dark">
                        Add Contact
                    </Link>
                </div>
                  <div className="col-md-10 mx-auto">
                      <table className="table table-hover">
                          <thead className="text-white bg-dark text-center">
                              <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Number</th>
                                  <th scope="col">Action</th>
                              </tr>
                          </thead>
                          <tbody className="text-center">
                              {
                                  contacts.map((contacts, id)=>(
                                      <tr key={id}>
                                          <td>{id+1}</td>
                                          <td>{contacts.name}</td>
                                          <td>{contacts.email}</td>
                                          <td>{contacts.number}</td>
                                          <td >
                                              <Link to={`/edit/${contacts.id}`} className="btn btn-sm btn-primary">
                                              Edit
                                              </Link>
                                              <button type="button" className="btn btn-danger btn-sm mx-2" onClick={()=>deleteContact(contacts.id)}>Delete</button>
                                          </td>
                                      </tr>
                                  ))
                              }
                          </tbody>
                      </table>
                  </div>
            </div>
        </div>
    )
}
export  default Home