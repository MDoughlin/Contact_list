import { TextField, Stack, Box, IconButton, Button } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Form() {

  return (
    <>
      <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <IconButton >
          <AccountCircleOutlinedIcon style={{ fontSize: '10rem' }} >
            {/* this is where i need to put the input for the avatar */}
          </AccountCircleOutlinedIcon>
        </IconButton>
      </Box>
      <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "30vh" }}>
        <Box justifyContent="center">
          <Stack spacing={2} direction='row'>
            <TextField
              id="outlined-number"
              label="First Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Last Name"
              type="Text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <br />
          <Stack spacing={2} direction='row'>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Phone Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <TextField style={{ justifyContent: "center", alignItems: "center", display: "flex" }}
            sx={{ pt: 2 }}
            id="outlined-number"
            label="Birthday"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Box style={{ justifyContent: "center", alignItems: "center", display: "flex" }} sx={{ pt: 2 }}>
            <Button variant="outlined" sx={{ color: "#FF5733" }}>Add</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Form;
