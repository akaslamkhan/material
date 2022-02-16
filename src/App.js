import React from 'react';
import { Typography,Button,AppBar, Card, CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core';
import { PhotoCamera} from '@material-ui/icons';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  container:{
    padding: theme.spacing(8,0,6)
  },
  icon:{
    marginRight: '20px'
  },
  buttons:{
    marginTop:'40px'
  },
  cardGrid:{
    padding:"20px 0"
  },
  card:{
    height:'100%',
    display:'flex',
    flexDirection: 'column'
  },
  cardmedia:{
    paddingTop: '56.25%'
  },
  cardContent:{
    flexGrow:1,
  }
}))

const cards = [1,2,3,4,5,6,7,8,9]


const App = () => {
  const classes = useStyles()
 
  return (
    <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <PhotoCamera className={classes.icon}/>
      <Typography variant="h6">Photo Album</Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Photo Album
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            This is just a small project to demo what i've learned in the material ui and also before moving on to the projects i would want to learn the material ui first  as it will help me to create css in an easy way
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See My Photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Want to see More
                </Button>
              </Grid>
            </Grid>
          </div>

        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} >
          {cards.map((card)=>(
            <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardmedia} image="https://source.unsplash.com/random" title="title"/>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Heading
                </Typography>
                <Typography>
                  This is the card media you can describe what you want here
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">View</Button>
                <Button size="small" color="primary">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
          ))}
          </Grid>
      </Container>
    </main>

    </>
  )
}

export default App