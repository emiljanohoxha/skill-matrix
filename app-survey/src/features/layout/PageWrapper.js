import Box from "@mui/material/Box";

export const PageWrapper = (props) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100vh",
      backgroundColor: "#f9dcc4",
      border: "1px solid white",
      borderColor: "#f9dcc4",
      pt: 2,
      pb: 2
    }}
  />
);
