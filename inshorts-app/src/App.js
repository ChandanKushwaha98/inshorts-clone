import { Box, makeStyles } from '@material-ui/core';
import Articles from './components/Articles';
//components
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 110,
    width: '59%',
    margin: '0 auto', [theme.breakpoints.down('md')]: {
      with: '75%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%'
    }
  }
}));
function App() {
  const classes = useStyles();
  return (
    <Box className="App">
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Articles />
      </Box>
    </Box>
  );
}

export default App;
