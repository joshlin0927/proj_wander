import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

function TcDeleteConfirm(props) {
  const {} = props
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <h5
              className="modal-title d-flex justify-content-center my-5"
              id="exampleModalLabel"
            >
              是否要刪除課程?
            </h5>
            <div className="d-flex justify-content-center mb-5">
              <button
                type="button"
                className="btn btn-primary mx-2"
              >
                <span>是</span>
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2"
                data-dismiss="modal"
              >
                <span>否</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default TcDeleteConfirm
