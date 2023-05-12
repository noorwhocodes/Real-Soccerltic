
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
const bgImage ="https://wallpapers.com/images/high/fight-til-the-end-manchester-city-logo-imhal7zgyvzpnwaw.webp"

  function Default() {
  const { size } = typography;
  return (
    <DashboardLayout
    sx={{
      backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
        `
        url(${bgImage})`,
      backgroundPositionY: "1%",
    }}
    >
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={1} mb={1}>
          this is admin panel
          
          
        </Grid>
        <Grid container spacing={3} mb={9}>
          <Grid item xs={20} lg={0.5}>
            <GradientLineChart
              //title="Sales Overview" 
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid item xs={20} lg={11}>
          
            <Slider />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SalesTable title="users info" rows={salesTableData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoriesList title="display data" categories={categoriesListData} />
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;