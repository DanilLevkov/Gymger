import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { TableHead } from "@material-ui/core";

//zIndex="tooltip"

export class HeadofTable extends React.Component {
  render() {
    const { style, columns } = this.props;
    return (
      <TableHead style={style}>
        <TableRow>
          <TableCell width={"68px"}>
            Time
          </TableCell>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={"center"}
              width="169px"
              padding={"none"}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
}