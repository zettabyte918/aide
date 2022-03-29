import * as React from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Redirect, useHistory } from "react-router-dom";
import { Paper } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("password", data.get("password"));
    // eslint-disable-next-line no-console
    axios({
      url: "http://localhost:8083/api/auth/sign-in",
      method: "post",
      data: {
        password: data.get("password"),
        email: data.get("email"),
      },
    })
      .then((res) => {
        window.localStorage.setItem("token", res.data.authToken.token);
        console.log(localStorage.token);
        Swal.fire({
          icon: "success",
          title: "Bienvenu",

          showCloseButton: false,
          showConfirmButton: false,
          background: "#29738B",
          timer: 3500,
        });
        window.location.href = "http://localhost:3000/profile";
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
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "white",
          backgroundImage: `url('/ss.gif')`,
          backgroundSize: "cover",
          paddingTop: "56px",
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
              marginTop: "65px",
              marginBottom: "65px",
            }}
          >
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
              Se connecter
            </Typography>

            <Box
              mb={3}
              mx={8}
              my={2}
              component="form"
              color="#29738B"
              onSubmit={handleSubmit}
              noValidate
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Addresse email"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    {...label}
                    defaultChecked
                    sx={{
                      color: "secondary",
                      "&.Mui-checked": {
                        color: "secondary",
                      },
                    }}
                  />
                }
                label="Se souvenir de moi"
              />
              <Box mb={3} mx={8} my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Sidentifier
                </Button>
              </Box>
              <Grid container>
                <Grid item xs>
                  <Link href="" variant="body2" color="common.white">
                    Mot de passe perdu ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2" color="common.white">
                    {"créer un compte"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
