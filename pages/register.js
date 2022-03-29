import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import LoginTabs from "../components/Tabs";
import Autowidth from "@components/Autowidth";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import RegisterAssociation from "./registerAssociation";

import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";

const theme = createTheme();

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
/* function handleChange(field, e) {
  let fields = this.state.fields;
  fields[field] = e.target.value;
  this.setState({ fields });
} */
function contactSubmit(e) {
  e.preventDefault();

  if (this.handleValidation()) {
    alert("Form submitted");
  } else {
    alert("Form has errors.");
  }
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    axios({
      url: "http://localhost:8083/api/auth/sign-up-user",
      method: "post",
      data: {
        firstname: data.firstName,
        lastname: data.lastName,
        password: data.password,
        email: data.email,
        type: "user",
      },
    })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Bien ajouté",
          html: '<span style="color:#FFFFFF">Merci de consulter votre email pour activer le compte. </span>',
          showCloseButton: false,
          showConfirmButton: false,
          background: "#29738B",
          timer: 3500,
        });
      })

      .catch((err) => {
        Swal.fire({
          icon: "warning",
          html: err,
          showCloseButton: false,
          showConfirmButton: false,
          background: "#29738B",
          timer: 3500,
        });
      });
  };
  const onSubmitAssociation = (data) => {
    console.log("data", data);
    axios({
      url: "http://localhost:8083/api/auth/sign-up-user",
      method: "post",
      data: {
        firstname: data.firstName,
        lastname: data.lastName,
        password: data.password,
        email: data.email,
        type: "Association",
      },
    })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Bien ajouté",
          html: '<span style="color:#FFFFFF">Merci de consulter votre email pour activer le compte. </span>',
          showCloseButton: false,
          showConfirmButton: false,
          background: "#29738B",
          timer: 3500,
        });
      })

      .catch((err) => {
        Swal.fire({
          icon: "warning",
          html: err,
          showCloseButton: false,
          showConfirmButton: false,
          background: "#29738B",
          timer: 3500,
        });
      });
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  /* const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };
 */
  const required = (value) => (value ? undefined : "Required");
  const mustBeNumber = (value) =>
    isNaN(value) ? "Must be a number" : undefined;
  const minValue = (min) => (value) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  /*
  const validate = values => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }}
      this.setState({ errors: errors });
      return formIsValid;
  };*/

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  /* const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }; */

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          // backgroundColor: "white",
          // backgroundImage: `url('/Untitled design.gif')`,
          backgroundSize: "cover",
          paddingTop: "70px",
          paddingBottom: "36px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          // marginTop: "-64px",
          // paddingBottom: "83px",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              width: 400,
              border: "ridge",
              borderColor: "#939393",
              marginTop: "-1px",
              marginBottom: "-1px",
            }}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="utilisateur" {...a11yProps(0)} />
                <Tab label="Association" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: "primary",
                  margin: 0,
                  mx: "auto",
                  width: 35,
                  p: 1,
                  m: 1,
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                color="common.white"
                component="h1"
                variant="h5"
                align="center"
              >
                Créez un compte
              </Typography>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box mb={3} mx={8} my={2}>
                    <TextField
                      id="outlined-basic"
                      label="Nom"
                      variant="outlined"
                      error={errors.firstName}
                      helperText={
                        errors.firstName ? "Veuillez vérifier votre nom" : ""
                      }
                      name="firstname"
                      {...register("firstName", {
                        required: true,
                        pattern: /^[a-zA-Z]+$/,
                      })}
                    />
                  </Box>

                  <Box mb={3} mx={8} my={2}>
                    <TextField
                      id="outlined-basic"
                      label="Prénom"
                      variant="outlined"
                      error={errors.lastName}
                      helperText={
                        errors.lastName ? "Veuillez vérifier votre prénom" : ""
                      }
                      name="lastname"
                      {...register("lastName", {
                        required: true,
                        maxLength: 10,
                      })}
                    />
                  </Box>

                  <Box mb={3} mx={8} my={2}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      error={errors.email}
                      helperText={
                        errors.email ? "Veuillez vérifier votre email" : ""
                      }
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                  </Box>

                  <Box mb={3} mx={8} my={2}>
                    <TextField
                      id="outlined-basic"
                      label="Mot de passe"
                      variant="outlined"
                      error={errors.password}
                      helperText={
                        errors.password
                          ? "Votre mot de passe doit se composer de 4 types de caractères différents : majuscules, minuscules, chiffres, et signes de ponctuation ou caractères spéciaux (€, #...)."
                          : ""
                      }
                      name="email"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                      })}
                    />
                  </Box>

                  <Box mb={3} mx={8} my={2}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      S&apos;inscrire
                    </Button>
                  </Box>
                </form>
              </div>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2" color="common.white">
                    Déjà inscrit ? Connectez-vous ici !
                  </Link>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: "primary",
                  margin: 0,
                  mx: "auto",
                  width: 35,
                  p: 1,
                  m: 1,
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                color="common.white"
                component="h1"
                variant="h5"
                align="center"
              >
                Créez un compte
              </Typography>
              <div>
                <form onSubmit={handleSubmit(onSubmitAssociation)}>
                  <Box mb={3} mx={8} my={2}>
                    <TextField
                      id="outlined-basic"
                      label="Nom de l'association"
                      variant="outlined"
                      error={errors.firstName}
                      helperText={
                        errors.firstName ? "Veuillez vérifier votre nom" : ""
                      }
                      name="firstname"
                      {...register("firstName", {
                        required: true,
                        pattern: /^[a-zA-Z]+$/,
                      })}
                    />
                  </Box>

                  <Box mb={3} mx={8} my={2}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      error={errors.email}
                      helperText={
                        errors.email ? "Veuillez vérifier votre email" : ""
                      }
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                  </Box>

                  <Box mb={3} mx={8} my={2}>
                    <TextField
                      id="outlined-basic"
                      label="Mot de passe"
                      variant="outlined"
                      error={errors.password}
                      helperText={
                        errors.password
                          ? "Votre mot de passe doit se composer de 4 types de caractères différents : majuscules, minuscules, chiffres, et signes de ponctuation ou caractères spéciaux (€, #...)."
                          : ""
                      }
                      name="email"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                      })}
                    />
                  </Box>

                  <Box mb={3} mx={8} my={2}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      S&apos;inscrire
                    </Button>
                  </Box>
                </form>
              </div>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2" color="common.white">
                    Déjà inscrit ? Connectez-vous ici !
                  </Link>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
