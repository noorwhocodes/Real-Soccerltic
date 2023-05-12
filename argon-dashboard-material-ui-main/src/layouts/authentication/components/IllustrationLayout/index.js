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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

function IllustrationLayout({ color, header, title, description, button, illustration, children }) {
  return (
    <PageLayout background="dark">
      <ArgonBox  // this top bar
        color="white"
        bgColor="info"
        variant="gradient"
        borderRadius="xl"
        shadow="lg"
        opacity={1}
        p={2}
        margin={2}
      >
        Real Soccerlytic
      </ArgonBox>
      <Grid container>
        <Grid item xs={8} sm={5} md={3} lg={4} xl={3} color="white" sx={{ mx: "auto" }}>
          <ArgonBox display="flex" flexDirection="column" justifyContent="center" height="100vh" color="white">  {/* this argon box for signin box */}
            <ArgonBox pt={1} px={1} > {/* this argon box for signin box */}
              {!header ? (
                <>
                  <ArgonBox mb={2}> {/* this for title on image */}
                    <ArgonTypography variant="h4" color="white" fontWeight="bold">
                      {title}
                    </ArgonTypography>
                  </ArgonBox>
                  <ArgonTypography variant="body2" fontWeight="regular" color="text">  {/* this for desc below signin */}
                    {description}
                  </ArgonTypography>
                </>
              ) : (
                header
              )}
            </ArgonBox>
            <ArgonBox p={3}>{children}</ArgonBox>
          </ArgonBox>
        </Grid>
        <Grid item xs={3} lg={6}>
          <ArgonBox //this is the boxx for image
            display={{ xs: "none", lg: "flex" }}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            //width="calc(100% - 2rem)"
            //height="calc(100vh - 2rem)"
            width="80%"
            height="80%"
            
            position="relative"
            borderRadius="lg"
            textAlign="center"
            m={4}
            px={13}
            sx={{ overflow: "hidden" }}
          >
            <ArgonBox //this for image we set in the box
              component="img"
              src={illustration.image}
              alt="background img"
              width="150%"
              position="absolute"
              top={0}
              left={0}
            />
            <ArgonBox //this for color we set in the box
              bgColor={color}
              variant="gradient"
              width="100%"
              height="100%"
              position="absolute"
              topl={0}
              left={0}
              opacity={0.6}
            />
            <ArgonBox position="relative">
              {illustration.title && (
                <ArgonBox mt={4} mb={1}>
                  <ArgonTypography variant="h4" color="white" fontWeight="bold">
                    {illustration.title}
                  </ArgonTypography>
                </ArgonBox>
              )}
              {illustration.description && (
                <ArgonBox mb={1}>
                  <ArgonTypography variant="body2" color="white">
                    {illustration.description}
                  </ArgonTypography>
                </ArgonBox>
              )}
            </ArgonBox>
          </ArgonBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
  color: "info",
  header: "",
  title: "",
  description: "",
  button: { color: "info" },
  illustration: {},
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object,
  children: PropTypes.node.isRequired,
  illustration: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default IllustrationLayout;
