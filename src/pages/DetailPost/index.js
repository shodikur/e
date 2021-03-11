import React, { useEffect, useState } from 'react'
import '../../App.css'
import Axios from 'axios'
import ContentLoader from "react-content-loader"
import { Nav, Footer} from '../../Component'
import { useParams } from 'react-router-dom'

const DetailPost = () => {
    const { id } = useParams()
    const [article, setArticle] = useState([])
    useEffect(() => {
      Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) 
      .then((res) => setArticle(res.data))
      .catch((err) => console.log(err))
    }, [])
  return (
  <>
  <Nav/>
  {/* <!-- Page Header --> */}
  <header classNameName="masthead">
    <div classNameName="overlay"></div>
    <div classNameName="container">
      <div classNameName="row">
      <div classNameName="col-lg-8 col-md-10 mx-auto">
          <div classNameName="post-heading">
            {article == '' ? (
              <h1>LOADING....</h1>
            ):
            (
              <h1>{article.title}</h1>
            )}
            <span classNameNameName="meta">Posted by
                <a href="#"> {article.userId == 1 ? 'Shodiq' : article.userId == 2? 'Rifqi' : 'robot'} </a></span>
          </div>
        </div>
      </div>
    </div>
  </header>

  {/* <!-- Main Content --> */}
  <div classNameNameName="container">
    <div classNameNameName="row">
      <div classNameName="col-lg-8 col-md-10 mx-auto">
          <article>
              {article == '' ? (<p>LOADING....</p>):(<p>{article.body}</p>)}
          </article>
      </div>
    </div>
  </div>

  <hr/>
  <Footer/>
  </>
  );
}

export default DetailPost;
