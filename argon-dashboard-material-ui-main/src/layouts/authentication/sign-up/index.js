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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import axios from "axios";
import { useState } from "react";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import bgImage from "assets/images/signup_img.jpg";

function Cover() {

  //signup stuff
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    axios.post("http://127.0.0.1:5000/register", { username,email,password })
      .then((response) => {
        console.log(response);
        if (response.data.data === "exists") {
          alert("user already exists");
          console.log(response.data.data);
        }
        else if (response.data.data === "success") {
          alert("Signup Successful");
          console.log(response.data.data);
          window.location.href = "/authentication/sign-in";
        }
        else if (response.data.data === "empty") {
          alert("enter all fields");
          console.log(response.data.data);
        
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("catchhh");
      }
      );
    }




  return (
    <CoverLayout
      title="Welcome!"
      description="Real Soccerlytic."
      image={bgImage}
      imgPosition="top"
      button={{ color: "dark", variant: "gradient" }}
    >
      <Card>
        <ArgonBox p={3} mb={1} textAlign="center">
          <ArgonTypography variant="h5" fontWeight="medium">
            Register Below
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={2}>
          
        </ArgonBox>
        <ArgonBox px={12}>
          
        </ArgonBox>
        <ArgonBox pt={2} pb={3} px={3}>
          <ArgonBox component="form" role="form">
            <ArgonBox mb={2}>
              <ArgonInput onChange={(event) =>{setUsername(event.target.value)}} type="text" placeholder="Name"  />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput onChange={(event) =>{setEmail(event.target.value)}} type="email" placeholder="Email"  />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput onChange={(event) =>{setPassword(event.target.value)}} type="password" placeholder="Password" />
            </ArgonBox>

            <ArgonBox mt={4} mb={1}>
              <ArgonButton variant="gradient" color="info" fullWidth onClick={signup}>
                Sign up
              </ArgonButton>
            </ArgonBox>
            <ArgonBox mt={2}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <ArgonTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </ArgonTypography>
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
