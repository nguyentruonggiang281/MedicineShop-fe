import { Typography, Grid } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#f0f",
        width: "100%",
        height: "200px",
        margin: "24px 0 0 -16px",
        padding: "0px",
        position: "absolute",
      }}
    >
      <Grid container sx={{ bgcolor: 'lightgrey', py: 3 }}>
      {/* Cột đầu tiên */}
      <Grid item xs={12} md={4} >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Cột đầu tiên</Typography>
      </Grid>
      {/* Các cột còn lại */}
      <Grid item xs={12} md={2} >
        <Typography variant="subtitle1">Cột 2</Typography>
      </Grid>
      <Grid item xs={12} md={2} >
        <Typography variant="subtitle1">Cột 3</Typography>
      </Grid>
      <Grid item xs={12} md={2} >
        <Typography variant="subtitle1">Cột 4</Typography>
      </Grid>
      <Grid item xs={12} md={2} >
        <Typography variant="subtitle1">Cột 5</Typography>
      </Grid>
    </Grid>
    </footer>
  );
}

export default Footer;
