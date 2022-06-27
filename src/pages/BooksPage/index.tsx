import React, { useState } from 'react'
import BookItem, { Book } from '../../components/BookItem'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import Pagination from '../../components/Pagination'
import api from '../../service/api'
import './style.css'

const BooksPage = () => {
  const [books, setBooks] = useState<Book[] | undefined>()
  const [modalItem, setModalItem] = useState<Book | null>()

  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(1)
  const perPage = 12

  React.useEffect(() => {
    const getBooks = async () => {
      const response = await api.get(`books?page=${page}&amount=${perPage}&category=biographies`)
      setTotalItems(response.data.totalItems)
      setBooks(response.data.data)
    }
    getBooks()
  }, [page])
  return (
    <>
      <div className='page-content'>
        <Header />
        <main className='books-list'>
          {books?.map((book: Book) => (
            <BookItem key={book.id} book={book} setModalItem={setModalItem} />
          ))}
        </main>
        <Pagination page={page} setPage={setPage} totalItems={totalItems} perPage={perPage} />
      </div>
      {modalItem && <Modal setModalItem={setModalItem} modalItem={modalItem} />}
    </>
  )
}

export default BooksPage