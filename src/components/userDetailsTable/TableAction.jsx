import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteUserData } from '../../store/action';

const TableAction = ({ data, setOpenModal }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Button
        style={{ width: "50%" }}
        variant="outline-success"
        onClick={() => setOpenModal(true)}
      >
        <i className="fa fa-pencil "></i>
      </Button>
      <Button
        style={{ width: "50%" }}
        variant="outline-danger"
        onClick={() => dispatch(deleteUserData(data.id))}
      >
        <i className="fa fa-trash"></i>
      </Button>
    </div>
  );
};

export default TableAction;