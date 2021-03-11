import React, { useEffect, useState } from 'react'
import '../../App.css'
import Axios from 'axios'
import ContentLoader from "react-content-loader"
import { Nav, Footer} from '../../Component/index'
import {
    Link,
    useHistory
} from 'react-router-dom'

function Home() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts') 
    .then((res) => setArticles(res.data))
    .catch((err) => console.log(err))
  }, [])

  const router = useHistory();
  const loading = () => {
    return (
      <>
          <ContentLoader 
            speed={8}
            width={476}
            height={124}
            viewBox="0 0 476 124"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="-30" y="1" rx="3" ry="3" width="259" height="18" /> 
            <rect x="1" y="28" rx="3" ry="3" width="154" height="18" /> 
            <rect x="0" y="60" rx="3" ry="3" width="410" height="10" /> 
            <rect x="0" y="78" rx="3" ry="3" width="380" height="10" /> 
            <rect x="0" y="99" rx="3" ry="3" width="178" height="10" />
          </ContentLoader>
          <ContentLoader 
            speed={8}
            width={476}
            height={124}
            viewBox="0 0 476 124"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="-30" y="1" rx="3" ry="3" width="259" height="18" /> 
            <rect x="1" y="28" rx="3" ry="3" width="154" height="18" /> 
            <rect x="0" y="60" rx="3" ry="3" width="410" height="10" /> 
            <rect x="0" y="78" rx="3" ry="3" width="380" height="10" /> 
            <rect x="0" y="99" rx="3" ry="3" width="178" height="10" />
          </ContentLoader>
          <ContentLoader 
            speed={8}
            width={476}
            height={124}
            viewBox="0 0 476 124"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="-30" y="1" rx="3" ry="3" width="259" height="18" /> 
            <rect x="1" y="28" rx="3" ry="3" width="154" height="18" /> 
            <rect x="0" y="60" rx="3" ry="3" width="410" height="10" /> 
            <rect x="0" y="78" rx="3" ry="3" width="380" height="10" /> 
            <rect x="0" y="99" rx="3" ry="3" width="178" height="10" />
          </ContentLoader>
      </>
    )
  }
  return (
  <>
  <Nav/>
  {/* <!-- Page Header --> */}
  <header className="masthead">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>Clean Blog</h1>
            <span className="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  {/* <!-- Main Content --> */}
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        {articles == ' ' ? (<loading/>) : articles.map((item) => {
          return(<>
            <div className="post-preview">
              <Link to={`/detail/${item.id}`}>
                <h2 className="post-title">
                  {item.title}
                </h2>
                <h3 classNameName="post-subtitle">
                  {item.body}
                </h3>
              </Link>
              <p classNameName="post-meta">Posted by
                <a href="#"> {item.userId == 1 ? 'Shodiq' : item.userId == 2? 'Rifqi' : 'robot'} </a>
              </p>
            </div> 
            <button onClick={()=> router.push(`/detail/${item.id}`)} classNameName='btn btn-primary'>Read article</button>
            <hr/>
          </>)
        })}

       
        {/* <!-- Pager --> */}
        <div className="clearfix">
          <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </div>

  <hr/>
  <Footer/>
  </>
  );
}

export default Home;
