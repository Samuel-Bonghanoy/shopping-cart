import { Grid } from "@mui/material";

function AppLayout() {
  return (
    <>
      <Grid container spacing={2} className="bg-slate-500 h-screen">
        <Grid item xs={10} className="bg-slate-500">
          <p>xs=8</p>
        </Grid>
        <Grid item xs={2}>
          <p>xs=4</p>
        </Grid>
      </Grid>
    </>
  );
}

export default AppLayout;
