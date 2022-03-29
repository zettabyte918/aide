import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from "@mui/material/InputLabel";


import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import { makeStyles } from "@mui/material/styles";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Input from "@mui/material/Input";



import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormLabel from '@mui/material/FormLabel';


import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 10,
    p: 4,
};
const theme = createTheme();
// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   }
// }));
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
};

export default function Annonce() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const classes = useStyles();
    const [typeValue, setTypeValue] = React.useState("1");
    const handleChange = event => {
        setTypeValue(event.target.value);
    };

    return ( 
        <div>
            <Button variant="contained" onClick={handleOpen}> ajouter un don </Button>
            <Modal
                open={open}
                onClose={handleClose}

            >
                <Box sx={style} >

                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs" >
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 4, marginBottom: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    // width: "500px"
                                }}
                            >
                                <Typography component="h1" variant="h5">
                                    Information générale
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1}}>
                                    <Grid container spacing={2}>
                                        <Grid mb={3} mx={8} my={2}>
                                            <TextField
                                                name="title"
                                                required
                                                fullWidth
                                                multiline
                                                id="title"
                                                label="Titre de votre don"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid mb={3} mx={8}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="description"
                                                multiline
                                                rows={2}
                                                label="Description"
                                                name="description"

                                            />
                                        </Grid>

                                        <Grid mb={3} mx={8} >
                                            <Grid>

                                                <InputLabel htmlFor="grouped-native-select">Catégorie</InputLabel>
                                                <Select
                                                    native
                                                    defaultValue=""
                                                    onChange={handleChange}
                                                    input={<Input id="grouped-native-select" />}
                                                >

                                                    <option value={1}>Pour la maison </option>
                                                    <option value={2}>Habillement </option>
                                                    <option value={3}>Informatique et multimédia</option>
                                                    <option value={4}>Autres.. </option>
                                                </Select>

                                            </Grid>
                                            <br />



                                            <InputLabel htmlFor="grouped-select">Sous-catégorie</InputLabel>
                                            {typeValue === "1" ? (<Select

                                                defaultValue="" input={<Input id="grouped-select" />}>
                                                {/* <MenuItem value="">
                                                              <em>None</em>
                                                             </MenuItem> */}
                                                <MenuItem value={1}>Electroménager</MenuItem>
                                                <MenuItem value={2}>Bricolage</MenuItem>


                                            </Select>

                                            ) : null}



                                            {typeValue === "2" ? (<Select defaultValue="" input={<Input id="grouped-select" />}>
                                                {/* <MenuItem value="">
                                                               <em>None</em>
                                                               </MenuItem> */}
                                                <MenuItem value={1}>vétements</MenuItem>
                                                <MenuItem value={2}>chaussures</MenuItem>
                                                <MenuItem value={2}>sacs</MenuItem>
                                                <MenuItem value={2}>équipement pour enfant et bébé </MenuItem>
                                            </Select>

                                            ) : null}



                                            {typeValue === "3" ? (<Select defaultValue="" input={<Input id="grouped-select" />}>
                                                {/* <MenuItem value="">
                                                             <em>None</em>
                                                              </MenuItem> */}
                                                <MenuItem value={1}>Ordinateurs</MenuItem>
                                                <MenuItem value={2}>Télephones portables</MenuItem>
                                                <MenuItem value={2}>Télèvisions</MenuItem>

                                            </Select>

                                            ) : null}


                                        </Grid>
                                        <Grid mb={3} mx={8}>
                                            <FormLabel id="demo-radio-buttons-group-label">Dans quel état est votre objet ?</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="etat"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="Comme neuf" control={<Radio />} label="Comme neuf" />
                                                <FormControlLabel value="Bon état" control={<Radio />} label="Bon état" />
                                                <FormControlLabel value="État moyen" control={<Radio />} label="État moyen" />
                                                <FormControlLabel value="À bricoler" control={<Radio />} label="À bricoler" />
                                            </RadioGroup>
                                        </Grid>
                                        <Grid mb={3} mx={8} >
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <label htmlFor="contained-button-file">
                                                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                                {/* <IconButton color="primary"  >
                                                <PhotoCamera />
                                                </IconButton>  */}

                                            </label>

                                        </Stack>
                                        </Grid>
                                    </Grid>
                                    <Box mb={3} mx={8} >
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                        >
                                            Postuler
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>

                        </Container>
                    </ThemeProvider>


                </Box>
            </Modal>
        </div>
    );
}
