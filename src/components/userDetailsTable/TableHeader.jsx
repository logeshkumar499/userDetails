import React from 'react';
import { TABLEHEAD } from '../../contents';

const TableHeader = () => {
    return (
      <thead>
        <tr className="table-success">
          {TABLEHEAD.map((val) => {
            return <th key={val}>{val}</th>;
          })}
        </tr>
      </thead>
    );
};

export default TableHeader;