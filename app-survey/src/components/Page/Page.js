import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StartIcon from "@mui/icons-material/Start";
import { useNavigate } from "react-router-dom";

export const PageTitle = ({ actions, children }) => (
  <Box
    sx={{
      display: "flex",
      p: 2,

    }}
  >
    {children && (
      <Box sx={{ flex: 1 }}>
        {typeof children === "string" ? (
          <Typography
            variant="h3"
            sx={{
              display: "flex",

              justifyContent: "center"
            }}
          >
            {children}
          </Typography>
        ) : (
          children
        )}
      </Box>
    )}
    {actions && <Box sx={{ ml: 4 }}>{actions}</Box>}
  </Box>
);

export const Page = ({
  title,
  actions,
  withPadding,
  actions2,
  children,
  ...props
}) => {
  const navigate = useNavigate();
  const navigateToSurvey = () => {
    navigate("/survey");
  };

  return (
    <Paper
      {...props}
      sx={{
        mt: 6,
        width: "75vw",
        minHeight: "65%"
      }}
    >
      {(title || actions) && <PageTitle actions={actions}>{title}</PageTitle>}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            p: withPadding ? 20 : 0,
            backgroundColor: "#f9dcc4",
            fontSize: 22,
            fontFamily: "Prisma Text"
          }}
        >
          We're a startup company looking to learn more about how women buy
          wedding dresses. Reflect back to the time if and when you were looking
          for a wedding dress, and try to approach this survey through those
          eyes.
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          mt: 3

        }}
      >
        <Button
          onClick={navigateToSurvey}
          color="primary"
          variant="outlined"
          endIcon={<StartIcon />}
          actions={actions}
        >
          Start
        </Button>
      </Box>
    </Paper>
  );
};
