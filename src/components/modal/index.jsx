import { Modal } from "react-bootstrap";
import FormDetails from "../Form";

const UserDetailsModal = ({ openModal, setOpenModal,type ,data}) => {
  const handleClose = () => setOpenModal(false);
  return (
    <div>
      <Modal show={openModal} centered onHide={() => handleClose()}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <FormDetails handleClose={handleClose} type={type} data={data}/>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default UserDetailsModal;