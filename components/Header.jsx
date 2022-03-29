import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Home from '@mui/icons-material/Home';
import MuiNextLink from '@components/MuiNextLink';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import HideOnScroll from './HideOnScroll';
import Fab from '@mui/material/Fab';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import BackToTop from './BackToTop';



const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  // { title: `acceuil`, path: `/` },


  // { title: `créer un compte`, path: `/register` },

  // { title: `profil`, path: `/profile` },

  // { title: `Se connecter`, path: `/login` },
  
];

const Header = () => {
  return (
    <> 
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>

      {/* <HideOnScroll> */}
      <AppBar position="fixed" >
        <Toolbar >
          <Container maxWidth="lg"  sx={{ display: `flex`, justifyContent: `space-between` }}>
           
              <MuiNextLink activeClassName="active" href="/">
              <img   src="logoo.png" alt="logo" />
              </MuiNextLink>
            
            <Navbar navLinks={navLinks} />

            <SideDrawer navLinks={navLinks} />
          </Container>
        </Toolbar>
      </AppBar>
     
      {/* </HideOnScroll> */}
      <Offset />
    </>
    
  );
};

export default Header;
