import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { Footer, Nav } from '../../Component'


const Books = () => {
    const [books, setBooks] = useState([])
    // const [showModal, setShowModal] = useState (false)
    useEffect(() => {
      Axios.get('https://crudcrud.com/api/3db28e2da974451c81170a7044b4eaa7/books') 
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err))
    }, [])
    return(
        <>
        <Nav/>
        <header className="masthead">
            <div className="overlay"></div>
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                    <h1>Books</h1>
                </div>
                </div>
            </div>
            </div>
        </header>
        {/* <!-- Main Content --> */}
        <div className="container">
        {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
          <div classNameName="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                {books.map((item)=> {
                    return(
                        <div class="card" style={{ width: '100%'}}>
                        <img src={item.image} class="card-img-top" alt={item.title}/>
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.description}</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    )
                })}

            </div>
          </div>
        </div>
      
        <hr/>
        <Footer/>
        </>
    )
}


export default Books