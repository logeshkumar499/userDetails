import React from "react";
import Table from "react-bootstrap/Table";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const UserDetailsTable = () => {
  return (
    <div style={{ width: "100%" }}>
      <Table striped responsive bordered hover>
        <TableHeader />
        <TableBody />
      </Table>
    </div>
  );
};

export default UserDetailsTable;
