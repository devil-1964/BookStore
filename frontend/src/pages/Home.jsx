import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from "../components/Spinner.jsx"
import { Link } from "react-router-dom"
import { MdOutlineAddBox } from "react-icons/md"
import BooksTable from '../components/home/BooksTable.jsx'
import BooksCard from '../components/home/BooksCard.jsx'

const Home = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:5555';
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true)
    axios.get(`${apiUrl}/books`)
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false)
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])
  return (
    <div className='p-4 '>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          onClick={() => setShowType('table')}
          className='bg-sky-300 hover:bg-sky-600 py-1 px-4 rounded-lg'>
          Table
        </button>
        <button
          onClick={() => setShowType('card')}
          className='bg-sky-300 hover:bg-sky-600 py-1 px-4 rounded-lg'>
          Card
        </button>

      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (<Spinner />) : (
        showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />))}
    </div>
  )
}

export default Home