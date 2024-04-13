import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regPhone = /^\+?(\d{1,3})?[.-]?\(?\d{3}\)?[.-]?\d{3}[.-]?\d{4}$/;

const Form = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("Done");
    handleClick();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Header title={"Form"} subTitle={"Create a new User Profile"} />
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          helperText={
            errors.firstName
              ? "This Field is Required & min 3 characters"
              : null
          }
          error={Boolean(errors.firstName)}
          {...register("firstName", { required: true, minLength: 3 })}
        />
        <TextField
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          helperText={
            errors.lastName ? "This Field is Required & min 3 characters" : null
          }
          error={Boolean(errors.lastName)}
          {...register("lastName", { required: true, minLength: 3 })}
        />
      </Stack>
      <TextField
        label="Email"
        variant="filled"
        helperText={
          errors.email ? "Please Provide a valid Email Address" : null
        }
        error={Boolean(errors.email)}
        {...register("email", { required: true, pattern: regEmail })}
      />
      <TextField
        label="Contact Number"
        variant="filled"
        helperText={
          errors.number ? "Please Provide a valid Phone Number" : null
        }
        error={Boolean(errors.number)}
        {...register("number", { required: true, pattern: regPhone })}
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField
        id="filled-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          type="submit"
          sx={{ textTransform: "capitalize" }}
        >
          Create New User
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account Created Successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
