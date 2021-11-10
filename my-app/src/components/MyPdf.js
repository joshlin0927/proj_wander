import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import { API_HOST } from '../config'

function MyPdf(props) {
  const { resumeName } = props

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Document
        file={`${API_HOST}/resume/${resumeName}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div class="d-flex align-items-center justify-content-center">
        <button
          className="btn btn-sm btn-primary"
          onClick={() =>
            pageNumber > 1
              ? setPageNumber(pageNumber - 1)
              : setPageNumber(1)
          }
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <div className="mx-5">
          Page {pageNumber} of {numPages}
        </div>
        <button
          className="btn btn-sm btn-primary"
          onClick={() =>
            pageNumber < numPages
              ? setPageNumber(pageNumber + 1)
              : setPageNumber(numPages)
          }
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}
export default MyPdf
