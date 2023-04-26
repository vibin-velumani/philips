import { async } from "q";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../Api/axios";
import { useAuth } from "../../Authentication";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
//import { Col, Row, Container, FloatingLabel, Form, Button } from 'react-bootstrap';

const AddStaff = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [ph, setPh] = useState();
  const [DOB, setdob] = useState();
  const [address, setAddress] = useState();
  const [DOJ, setdoj] = useState();
  const [currsal, setcurrsal] = useState();
  const [user, setUser] = useState(false);
  const [loader, setLoader] = useState(1);
  const [row, setRow] = useState();
  const [data, setData] = useState({
    columns: [
      {
        dataField: "sname",
        text: "Name ",
        filter: textFilter(),
      },

      {
        dataField: "email",
        text: "Email-id",
      },
      {
        dataField: "ph",
        text: "Phone",
      },
      {
        dataField: "DOB",
        text: "DOB",
      },
      {
        dataField: "address",
        text: "Address",
      },
      {
        dataField: "DOJ",
        text: "DOJ",
      },
      {
        dataField: "currsal",
        text: "Salary",
      },
    ],
    rows: [],
  });

  const load = async () => {
    await axios
      .post("staff/viewstaff")
      .then((res) => {
        

        console.log(res.data);
        data.rows = res.data.data;
        
        setData({ ...data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    load();
  }, [loader]);

  const update = {
    onClick: (e, row, rowIndex) => {
      setRow(row);
      console.log(row._id);
      //setstatus(false);
    },
  };
  const updateInfo = async (e) => {
    e.preventDefault();
    console.log(DOB);
    await axios
      .post("/staff/addstaff", { name, email, ph, DOB, address, DOJ, currsal })
      .then((res) => {
        // setUser(res.data.details);
        // setName(res.data.details.name);
        // setEmail(res.data.details.email);
        // setPh(res.data.details.ph);
        // setdob(res.data.details.DOB);
        // setAddress(res.data.details.address);
        // setdoj(res.data.dtails.DOJ);
        // setcurrsal(res.data.details.currsal);

        toast.success("Updated Data Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function display(ch) {
    if (ch === 1) {
      return (
        <div class="tab-pane fade active show">
          <div class="card-body">
            <div class="form-group">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control mb-1"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control mb-1"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label class="form-label">Phone</label>
              <input
                type="number"
                class="form-control mb-1"
                value={ph}
                onChange={(e) => {
                  setPh(e.target.value);
                }}
              />
            </div>
            <div className="form-group w-50">
              <label className="form-label">Date Of Birth</label>
              <input
                type="date"
                className="form-control"
                value={DOB}
                onChange={(e) => setdob(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label class="form-label">Address</label>
              <input
                type="text"
                class="form-control"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="form-group w-50">
              <label className="form-label">Date Of Joining</label>
              <input
                type="date"
                className="form-control"
                value={DOJ}
                onChange={(e) => setdoj(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label class="form-label">Salary</label>
              <input
                type="number"
                class="form-control mb-1"
                value={currsal}
                onChange={(e) => {
                  setcurrsal(e.target.value);
                }}
              />
            </div>
            <div class="text-right mt-3">
              <button
                type="button"
                class="btn btn-primary"
                onClick={updateInfo}
              >
                Add Staff
              </button>
            </div>
          </div>
        </div>
      );
    } else if (ch === 2) {
      return (
        <Container fluid>
          <Row>
            <Col>
              <BootstrapTable
                rowStyle={{ color: "black" }}
                striped
                hover
                keyField="id"
                data={data.rows}
                columns={data.columns}
                filter={filterFactory()}
                pagination={paginationFactory()}
                rowEvents={update}
              />
            </Col>
          </Row>
        </Container>
      );
    }
  }

  return (
    <>
      {user ? (
        <h1>Some thing went wrong</h1>
      ) : (
        <Container>
          <div class="container light-style flex-grow-1 container-p-y">
            <ToastContainer />
            <h4 class="font-weight-bold py-3 mb-4">Add Staff</h4>

            <div class="card overflow-hidden">
              <div class="row no-gutters row-bordered row-border-light">
                <div class="col-md-2  pt-0">
                  <div class="list-group list-group-flush account-settings-links">
                    <a
                      className={`list-group-item list-group-item-action${
                        loader === 1 ? " active" : ""
                      }`}
                      data-toggle="list"
                      onClick={() => {
                        setLoader(1);
                      }}
                    >
                      Add Staff
                    </a>
                    <a
                      className={`list-group-item list-group-item-action${
                        loader === 2 ? " active" : ""
                      }`}
                      data-toggle="list"
                      onClick={() => {
                        setLoader(2);
                      }}
                    >
                      View Staff
                    </a>
                  </div>
                </div>
                <div class="col-md-10 mt-4">{display(loader)}</div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
export default AddStaff;
