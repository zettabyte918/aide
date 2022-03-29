import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import MuiNextLink from './MuiNextLink';
import Account from './Account';
import Annonce from './annonce';
const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` }, 
      }}
    >
      <Stack direction="row" spacing={2}>
        {navLinks.map(({ title, path }, i) => (
          <MuiNextLink
            key={`${title}${i}`}
            href={path}
            variant="button"
            sx={{ color: `white`, opacity: 0.5 }}
          >
            {title}
           
          </MuiNextLink>
          
        ))}
      </Stack> <Annonce/>
      <Account/>
     
    </Toolbar>
  );
};

export default Navbar;
