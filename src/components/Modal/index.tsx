import React from 'react'
import { Book } from '../BookItem'
import './style.css'

type Props = {
    setModalItem: (book: Book | null) => void,
    modalItem: Book
}
const Modal = ({setModalItem, modalItem}: Props) => {
    function handleOutsideClick (event: React.MouseEvent){
        if (event.target === event.currentTarget) setModalItem(null)
    }
    const book = modalItem
  return (
    <div className='container' onClick={handleOutsideClick}>
      <div className='content' >
        <div className='img-div'>
          <img className='modal-img' src={book?.imageUrl} alt="Livro" />
        </div>
        <div className='book-info'>
          <div className='info-area'>
            <h3 className='book-title'>{book?.title}</h3>
            <p style={{color: '#2E63F7'}}>{book?.publisher}</p>
          </div>
          <div className='info-area'>
            <h5>INFORMAÇÕES</h5>
            <div className="info">
              <div className="info-item">Páginas</div>
              <div className="info-info">{book?.pageCount}</div>
            </div>
            <div className="info">
              <div className="info-item">Editora</div>
              <div className="info-info">Editora Loyola</div>
            </div>
            <div className="info">
              <div className="info-item">Publicação</div>
              <div className="info-info">{book?.published}</div>
            </div>
            <div className="info">
              <div className="info-item">Idioma</div>
              <div className="info-info">{book?.language}</div>
            </div>
            <div className="info">
              <div className="info-item">Título Original</div>
              <div className="info-info">{book?.title}</div>
            </div>
            <div className="info">
              <div className="info-item">ISBN-10</div>
              <div className="info-info">{book?.isbn10}</div>
            </div>
            <div className="info">
              <div className="info-item">ISBN-13</div>
              <div className="info-info">{book?.isbn13}</div>
            </div>
          </div>
          <div className='info-area'>
            <h5>RESENHA DA EDITORA</h5>
            <p className='info-info'>{book?.description}</p>
          </div>
        </div>
        <div className='close-btn' onClick={() => setModalItem(null)}>x</div>
      </div>
    </div>
  )
}

export default Modal