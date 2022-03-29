import * as React from "react";
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
import { useForm } from "react-hook-form";

const theme = createTheme();

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
        name: data.name,
        phone: data.phone,
        password: data.password,
        email: data.email,
        type: "association",
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

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url('/login.svg')`,
          paddingTop: "36px",
          paddingBottom: "36px",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              padding: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#e5e4e2",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#ff3d00" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Créez un compte
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="nom de l'association"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label=" Addresse email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="mot de passe (8 caractères minimum)"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phone "
                    label="numéro de télèphone"
                    type="phone "
                    id="phone "
                    autoComplete="call-number"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="warning"
                sx={{ mt: 3, mb: 2 }}
              >
                S&apos;inscrire
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2" color="common.black">
                    Déjà inscrit ? Connectez-vous ici !
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
