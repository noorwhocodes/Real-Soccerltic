/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-mobile-button" style={{ fontSize: "12px" }} />,
    name: "Devices",
    description: (
      <>
          500,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          + 20 this Week
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
     color: "dark",
     icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
     name: "Total Feedbacks",
     description: (
       <>
           475 closed,{" "}
         <ArgonTypography variant="caption" color="text" fontWeight="medium">
           3 open
         </ArgonTypography>
       </>
     ),
     route: "/",
   },
  {
    color: "dark",
    icon: <i className="ni ni-satisfied" style={{ fontSize: "12px" }} />,
    name: "Happy Users",
    description: (
      <>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          +&nbsp;435
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-box-2" style={{ fontSize: "12px" }} />,
    name: "Error logs",
    description: (
      <>
         3 is active,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
         40 closed
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
 
];

export default categoriesListData;
