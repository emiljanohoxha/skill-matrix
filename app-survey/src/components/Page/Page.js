import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StartIcon from "@mui/icons-material/Start";

export const PageTitle = ({ actions, children }) => (
  <Box
    sx={{
      display: "flex",
      borderBottom: "2px solid black",
      borderColor: "primary.light",
      p: 2
    }}
  >
    {children && (
      <Box
        sx={{
          flex: 1
        }}
      >
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
}) => (
  <Paper
    {...props}
    sx={{
      width: "75vw",
      minHeight: "100%"
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

          backgroundColor: "#e6e8e6",

          borderBottom: "2px solid black"
        }}
      >
        We're a startup company looking to learn more about how women buy
        wedding dresses. Reflect back to the time if and when you were looking
        for a wedding dress, and try to approach this survey through those eyes.
      </Box>
    </Box>

    {/* {actions && <Box sx={{ ml: 4 }}>{actions}</Box>} */}

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5
      }}
    >
      <Button
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
