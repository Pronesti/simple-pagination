import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './components/Posts';
//import Pagination from './components/Pagination'; //change for react-bootstrap based
import PaginationB from './components/PaginationB';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(()=>{
    const  fecthPost = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fecthPost();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(posts)
  return (
    <div className="container mt-5">
    <h1 className="text-primary mb-3">My Blog</h1>
    <Posts posts={currentPosts} loading={loading} />
    <PaginationB totalPosts={posts.length} postPerPage={postPerPage} paginate={paginate} active={currentPage} />
    </div>
  );
}

export default App;
