import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import backgroundi from './images/background.jpg';


import Header from "./Components/Header";
import Places from "./Components/Places";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundi})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Places />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div id="footer">
          <h3>&copy; THANWAR 2021</h3>
        </div>
    </div>
  );
}

export default App;
