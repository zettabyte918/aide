import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import blueGrey from '@mui/material/colors';

const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="auto" sx={{ mb: 44 }}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={6}>
          <Image src="/pexels-erik-mclean-4061662.jpg" alt="objets" layout="responsive" width={800} height={800} />
        </Grid> */}
        <Grid item xs={12} sm={20}>
          <Typography component="h2" variant="h5" color="#b0bec5" textAlign="center" gutterBottom>
            <br></br> <br></br> <br></br> <br></br>Bienvenue sur &quot;Donner et Aider.tn&quot;, <br></br> le
            site de dons où vous pouvez tout donner, tout récupérer, le tout gratuit !
          </Typography>
          <Typography>{``}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
