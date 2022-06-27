import React from 'react'
import './style.css'

type Props = {
    page: number,
    setPage: (cb: (prevState: number) => number) => void,
    totalItems: number,
    perPage: number,
}
const Pagination = ({ page, setPage, totalItems, perPage}: Props) => {

    const totalPages = Math.ceil(totalItems / perPage)
  function handleNextPage () {
    if (page < totalPages) {
      setPage((prevState: number) => prevState + 1)
    }
  }
  function handlePrevPage () {
    if (page > 1) {
      setPage((prevState: number) => prevState - 1)
    }
  }
  return (
    <div className="pagination">
      <div className="pagination-content">
        <div>
          <p style={{fontWeight: '400'}}>Página {page} de {totalPages}</p>
        </div>
        <div className="pagination-btns">
          <div className={`page-btn ${page === 1 ? 'disabled' : ''}`} onClick={handlePrevPage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </div>
          <div className={`page-btn ${page === totalPages ? 'disabled' : ''}`} onClick={handleNextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination