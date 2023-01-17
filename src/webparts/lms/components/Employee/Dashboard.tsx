import * as React from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [date, setDate]: any = React.useState([{ dates: "", day: "" }]);
  const [tabs, setTabs]: any = React.useState("Home");

  React.useEffect(() => {
    function daysInMonth(month: number, year: number) {
      return new Date(year, month, 0).getDate();
    }
    const date1 = daysInMonth(1, 2023);
    let arr: any = [];
    for (let a = 1; a <= date1; a++) {
      const week: any = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const b = new Date(2023, 1 - 1, a);
      const c = week[b.getDay()];
      arr.push({ ...date, dates: a, day: c });
    }
    setDate(arr);
  }, []);

  return (
    <div className="Main-Div">
      <div className="basic">
        <div className="h-100 w-50 d-flex align-items-center">
          <img
            className="img-fluid h-75 w-25 rounded-circle"
            src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
          />
          <h5 className="ms-3">MY NAME</h5>
        </div>
        <div className="w-50 h-100 d-flex align-items-center justify-content-end">
          <span className="leave-bar rounded-pill ms-3">
            Annual Leaves <h6>10</h6>
          </span>
          <span className="leave-bar rounded-pill ms-3">
            Remaining Leaves <h6>10</h6>
          </span>
          <span className="leave-bar rounded-pill ms-3">
            Applied Leaves Status <h6>10</h6>
          </span>
        </div>
      </div>
      <div className="calender">
        <nav className="nav-bar">
          <li
            className={tabs==="Home"? "li-bar-true" : "li-bar-false"}
            role={"button"}
            onClick={() => setTabs("Home")}
          >
            Home
          </li>
          <li
           className={tabs==="Leaves"? "li-bar-true" : "li-bar-false"}
            role={"button"}
            onClick={() => setTabs("Leaves")}
          >
            Apply Leaves
          </li>
          <li
            className={tabs==="Policies"? "li-bar-true" : "li-bar-false"}
            role={"button"}
            onClick={() => setTabs("Policies")}
          >
            Policies
          </li>
        </nav>

        {/* home dash border */}

        {tabs === "Home" ? (
          <div className="border border-dark cal-div p-2">
            {date.map((items: any, index: any) => (
              <table key={index} className="d-flex flex-column">
                <td className="d-flex border border-dark p-2 align-items-center justify-content-center ">
                  {items.day}
                </td>
                <td className="d-flex border border-dark p-2 align-items-center justify-content-center">
                  {items.dates}
                </td>
                <td className="d-flex border border-dark p-2 align-items-center justify-content-center">
                  A
                </td>
              </table>
            ))}
          </div>
        ) : null}

        {/* Apply Leave dash  */}

        {tabs === "Leaves" ? (
          <div className="border border-dark cal-div p-2 d-flex flex-column">
            <div className="w-100 d-flex pb-2">
              <h6 className="w-25 d-flex align-items-end">Apply For Leaves</h6>

              <div className="w-75 h-100 d-flex align-items-center justify-content-end">
                <span className="leave-bar rounded-pill ms-3">
                  Remaining sick Leaves <h6>10</h6>
                </span>
                <span className="leave-bar rounded-pill ms-3">
                  Remaining planed Leaves <h6>10</h6>
                </span>
                <span className="leave-bar rounded-pill ms-3">
                  Remaining casual Leaves <h6>10</h6>
                </span>
              </div>
            </div>

            <div className="border border-dark d-flex w-100 p-2">
              <div className="w-75 container-fluid">
                <div className="row mb-3">
                  <label className="col-2">Leave Type</label>
                  <input className="col-8" type={"text"} />
                </div>

                <div className="row mb-3">
                  <label className="col-2">Subject</label>
                  <input className="col-8" type={"text"} />
                </div>

                <div className="row mb-3">
                  <label className="col-2">To</label>
                  <input className="col-3" type={"text"} />
                  <label className="col-2">From</label>
                  <input className="col-3" type={"text"} />
                </div>

                <div className="row mb-3">
                  <label className="col-2">Contact</label>
                  <input className="col-8" type={"text"} />
                </div>

                <div className="row mb-3">
                  <textarea className="col-10" rows={4} cols={30}>
                    Description
                  </textarea>
                </div>
              </div>
              <div className="w-25">
                <p className="mb-1">Last 5 Leaves</p>
                <div className="border border-dark p-2">
                  <div className="border-bottom border-dark mb-2 ">1</div>
                  <div className="border-bottom border-dark mb-2 ">2</div>
                  <div className="border-bottom border-dark mb-2 ">3</div>
                  <div className="border-bottom border-dark mb-2 ">4</div>
                  <div className="border-bottom border-dark mb-2 ">5</div>
                </div>
                <div className="mt-3 d-flex  justify-content-end">
                  <button className="bg-light border border-dark px-3 py-1">
                    Apply Leave
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* salary slip dash */}

        {/* <div className="border border-dark p-2">
          <div className="container-fluid ">
            <div className="row border border-dark d-flex justify-content-end ">
              <div className="col-1 border-start border-dark ">Month</div>
              <div className="col-1 border-start border-dark ">Jan-2023</div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">Employee Name</div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">Date Of Joining</div>
              <div className="col-2 border border-dark "></div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">Employee Code</div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">
                Total Working Days
              </div>
              <div className="col-2 border border-dark "></div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">Designation</div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">
                Number Of Working Days Attended
              </div>
              <div className="col-2 border border-dark "></div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">PAN</div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">Leaves</div>
              <div className="col-2 border border-dark "></div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">
                Bank Account Number
              </div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">Leaves Taken</div>
              <div className="col-2 border border-dark  d-flex">
                <div className="col">P</div>
                <div className="col border-start border-dark">S</div>
              </div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">hd</div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">hd</div>
              <div className="col-2 border border-dark  d-flex">
                <div className="col"></div>
                <div className="col border-start border-dark"></div>
              </div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">hd</div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">hd</div>
              <div className="col-2 border border-dark  d-flex">
                <div className="col"></div>
                <div className="col border-start border-dark"></div>
              </div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">hd</div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark "></div>
              <div className="col-2 border border-dark  d-flex">
                <div className="col"></div>
                <div className="col border-start border-dark"></div>
              </div>
            </div>

            <div className="row border border-dark">1</div>

            <div className="row d-flex justify-content-end ">
              <div className="col-6 border border-dark text-center ">
                <h6>Income</h6>
              </div>
              <div className="col-6 border text-center border-dark ">
                <h6>Deducation</h6>
              </div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark d-flex align-items-center ">
                <h6>Particular</h6>
              </div>
              <div className="col-4 border d-flex align-items-center border-dark ">
                <h6>Amount</h6>
              </div>
              <div className="col-4 border d-flex align-items-center border-dark ">
                <h6>Particular</h6>
              </div>
              <div className="col-2 border d-flex align-items-center border-dark ">
                <h6>Amount</h6>
              </div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">Basic Salary</div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">
                Employee PF Contribution
              </div>
              <div className="col-2 border border-dark "></div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">
                Dearness Allowance
              </div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">
                Employer PF Contribution
              </div>
              <div className="col-2 border border-dark "></div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">HRA</div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">TDX</div>
              <div className="col-2 border border-dark "></div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark "></div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">Professional Tax</div>
              <div className="col-2 border border-dark "></div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark "></div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">hh</div>
              <div className="col-2 border border-dark "></div>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-2 border border-dark ">
                <h6>Total</h6>
              </div>
              <div className="col-4 border border-dark "></div>
              <div className="col-4 border border-dark ">
                <h6>Total</h6>
              </div>
              <div className="col-2 border border-dark "></div>
            </div>
            <div className="row border border-dark text-center">
              <h6>Net Salary</h6>
            </div>
            <div className="row d-flex justify-content-end ">
              <div className="col-6 border border-dark ">1</div>
              <div className="col-6 border border-dark "></div>
            </div>
            <div className="d-flex mt-2 justify-content-end">
              <button className="bg-light border border-dark px-3 py-">
                Print
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Dashboard;
