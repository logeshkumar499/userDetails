import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserDetailsModal from "../modal";
import TableAction from "./TableAction";

const TableBody = () => {
  const { userData } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);

  return (
    <tbody>
      {userData.length ? (
        userData.map((data, i) => {
          return (
            <>
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.role}</td>
                <td>{data.dob}</td>
                <td>{data.gender}</td>
                <td>{Object.keys(data?.skill).map((val) => val + ", ")}</td>
                <td style={{textAlign:"center"}}>{data.others !== "" ? data.others : "---"}</td>
                <td>{data.address}</td>
                <td>{data.comments}</td>
                <td>
                  <TableAction data={data} setOpenModal={setOpenModal} />
                </td>
              </tr>
              <UserDetailsModal
                type="edit"
                data={data}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </>
          );
        })
      ) : (
        <tr>
          <td colSpan={10} style={{ textAlign: "center" }}>
            No Data Found
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
