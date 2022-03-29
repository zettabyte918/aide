// import axios from 'axios';
import dynamic from "next/dynamic";

// import { useRouter } from 'next/router';
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  ListItemText,
  TextField,
} from "@material-ui/core";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useStyles from "../styles/styles";
import { Controller, useForm } from "react-hook-form";
// import { useSnackbar } from 'notistack';
// import Cookies from 'js-cookie';
const theme = createTheme();

function Profile() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const getconsData = async () => {
      console.log(localStorage.getItem("token"));
      await axios
        .get("http://localhost:8083/api/auth/get-current-user", {
          headers: { Authorization: localStorage.getItem("token") },
        })

        .then((response) => {
          setDatas(response.data.currentUser);

          console.log(response.data.currentUser);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getconsData();
  }, []);

  if (datas == null) {
    window.location.href = "http://localhost:3000/login";
  }

  const {
    // handleSubmit,
    control,
    formState: { errors },
    // setValue,
  } = useForm();

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "#939393",
          // backgroundImage: `url('/Untitled design.gif')`,
          // backgroundSize: "cover",
          paddingTop: "111px",
          paddingBottom: "142px",
          margin: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "inherit",
          // marginTop: "-40px",
          // paddingBottom: "36px",
          paddingleft: "20px",
          backgroundSize: "cover",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <List>
              <NextLink href="/profile" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary=" Profil"></ListItemText>
                </ListItem>
              </NextLink>
            </List>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card
              style={{ backgroundColor: "transparent", borderColor: "#939393" }}
            >
              {/* <List> */}
              {/* <ListItem>
                                    <Typography component="h1" variant="h2" >
                                        Profil
                                    </Typography>
                                </ListItem> */}
              <ListItem>
                {/* <paper className={classes.paper}> */}
                <form className={classes.form}>
                  {/* <List> */}
                  <ListItem>
                    <Typography
                      variant="outlined"
                      fullWidth
                      value={datas.firstname}
                    >
                      Nom: {datas.firstname}
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      variant="outlined"
                      fullWidth
                      value={datas.lastname}
                    >
                      Prénom: {datas.lastname}
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      // variant="outlined"
                      fullWidth
                      value={datas.email}
                    >
                      {" "}
                      Addresse email: {datas.email}
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      color="#29738B"
                    >
                      Modifier
                    </Button>
                  </ListItem>
                  {/* </List> */}
                </form>
                {/* </paper> */}
              </ListItem>
              {/* </List> */}
            </Card>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
