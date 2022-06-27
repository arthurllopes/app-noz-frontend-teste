import React from 'react'
import imageplaceholder from '../../assets/imageplaceholder.png'
import './style.css'

export type Book = {
    "id": string,
    "title": string,
    "description": string,
    "authors": string[],
    "pageCount": number,
    "category": string,
    "imageUrl": string,
    "isbn10": string,
    "isbn13": string,
    "language": string,
    "publisher": string,
    "published": number
}

const BookItem = ({book, setModalItem}: {book: Book, setModalItem: (book: Book) => void}) => {
  return (
    <div className='book-area' onClick={() => setModalItem(book)}>
      <div className='img'>
        <img className='card-img' src={book.imageUrl ? book.imageUrl : imageplaceholder} alt="Livro" />
      </div>
      <div className='card-info'>
        <div>
          <p style={{fontWeight: '500'}}>{book.title}</p>
          <p style={{color: '#2E63F7', fontSize: '.85rem'}}>{book.publisher}</p>
        </div>
        <div className='book-details'>
          <p>{book.pageCount} páginas</p>
          <p>Editora Loyola</p>
          <p>Publicado em {book.published}</p>
        </div>
      </div>
    </div>
  )
}

export default BookItem