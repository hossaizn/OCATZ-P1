import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    AssessmentService.getList()
      .then(setAssessments);
  }, [ assessments ]);

  const columns = React.useMemo(
    () => [
      {
        Header: `Name`,
        accessor: `catName`,
      },
      {
        Header: `Date`,
        accessor: `catDateOfBirth`,
      },
      {
        Header: `Risk`,
        accessor: `riskLevel`,
      },
      {
        Header: `Score`,
        accessor: `score`,
      },
    ],
    []
  );

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data: assessments,
  });

  return <div>
    <Table striped hover border={2} {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup =>
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column =>
              <th {...column.getHeaderProps()}>{column.render(`Header`)}</th>)}
          </tr>)}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
            </tr>
          );
        })}
      </tbody>
    </Table>
  </div>;
};
