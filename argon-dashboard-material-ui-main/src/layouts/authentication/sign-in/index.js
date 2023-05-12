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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

import axios from "axios";

// Image
//const bgImage ="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";
import bgImage from "assets/images/signin1.jpg";


function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    axios.post("http://127.0.0.1:5000/login", { email, password })
    .then((response) => {
      console.log(response);
      if (response.data.data === "failure") {
        alert("Invalid Credentials");
        console.log(response.data.data);
      }
      else  {
        alert("Login Successful");
        console.log(response.data.data);
        window.location.href = "/dashboard";
      }
      //if(response.data.data === "success")
      // else if (response.data.data === "empty") {
      //   alert("enter all fields");
      //   console.log(response.data.data);
      
      // }
    })
    .catch((error) => {
      console.log(error);
    }
    );
  }
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: '"Real Soccerlytic"',
        description:
          "Camera Calibration to extract Soccer Analytics",
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput onChange={(event) =>{setEmail(event.target.value)}} type="email" placeholder="Email" size="large"  />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput onChange={(event) =>{setPassword(event.target.value)}} type="password" placeholder="Password" size="large" />
        </ArgonBox>

        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" fullWidth onClick={login}>
            Sign In
          </ArgonButton>
        </ArgonBox>
        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <ArgonTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Sign up
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
