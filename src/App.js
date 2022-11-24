import UserDetailsModal from "./components/modal";
import UserDetailsTable from "./components/userDetailsTable";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="app-container">
        <Button onClick={() => setOpenModal(true)}>Add User Details</Button>
        <UserDetailsTable />
        <UserDetailsModal
          type="add"
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </>
  );
}

export default App;
