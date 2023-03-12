import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import style from './table.module.css';

function createData(name, score, date, status) {
  return { name, score, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 0, "2 March 2023", "Expired"),
  createData("Big Baza Bang ", 56, "3 March 2023", "Completed"),
  createData("Mouth Freshner", 0, "4 March 2023", "Expired"),
  createData("Cupcake", 0, "-", "Take test"),
];


const makeStyle=(status)=>{
  if(status === 'Completed')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Expired')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className={style.Table}>
      <h3>Test Details</h3>
        <TableContainer
        //   component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Score</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className={style.status} style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className={style.Details}>Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}