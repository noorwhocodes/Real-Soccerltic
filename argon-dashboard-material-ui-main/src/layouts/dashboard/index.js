/* eslint-disable no-unused-vars */
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

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";

// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";
//bgimg

import bgImage from "assets/images/backdrop.jpg";
//const bgImage ="https://wallpapers.com/images/high/fight-til-the-end-manchester-city-logo-imhal7zgyvzpnwaw.webp"

  function Default() {
  const { size } = typography;
  return (
    <DashboardLayout
    sx={{
      backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
        `
        url(${bgImage})`,
      backgroundPositionY: "50%",
      backgroundPositionX: "50%",
      backgroundRepeat: "no-repeat",
    
    }}
    >
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={1} mb={1}>
          <Grid item xs={12} md={1} lg={3.5}>
            <DetailedStatisticsCard
              title="Today's Match"
              count="6"
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
              percentage={{ color: "success", count: "+55%", text: "since yesterday" }}
            />
          </Grid>
         
          <Grid item xs={12} md={1} lg={3.5}>
            <DetailedStatisticsCard
              title="Most Watched Match"
              count="+62"
              icon={{ color: "error", component: <i className="ni ni-world" /> }}
              percentage={{ color: "error", count: "-2%", text: "since last quarter" }}
            />
          </Grid>
          <Grid item xs={12} md={1} lg={3.5}>
            <DetailedStatisticsCard
              title="Top Goals"
              count="+10"
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
              percentage={{ color: "error", count: "-2%", text: "since last quarter" }}
            />
          </Grid>
          
        </Grid>

        {/* this is the slider part */}
        {/* this the container for the entire backdrop image margin  */}
        <Grid container spacing={3} mb={20}>  
          <Grid item xs={20} lg={0.1}>
            <GradientLineChart
              //title="Sales Overview" 
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid item xs={10} lg={10}>
          
            <Slider />
          </Grid>
        </Grid>
        {/* { <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SalesTable title="Country Rankings" rows={salesTableData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoriesList title="Our Audience" categories={categoriesListData} />
          </Grid>
        </Grid> } */}
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;
