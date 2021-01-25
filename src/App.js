import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./App.css";
import { red } from '@material-ui/core/colors';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Signup"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="LogIn" {...a11yProps('two')} />
        </Tabs>
      </AppBar>
      <TabPanel id="rt" value={value} index="one">
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="First-Name" variant="filled" /> <p>

      </p>
      <TextField id="outlined-basic" label="Last-Name" variant="filled" /><p>
        </p> 
      <TextField id="outlined-basic" label="Phone-Number" variant="filled" /><p>
        </p> 
      <TextField id="outlined-basic" label="E-mail" variant="filled" /> <p>
        </p>
      <TextField id="outlined-basic" label="password" type="password" variant="filled" />
      <p></p>
      <button id="btn" type="button" class="btn btn-success">Signup</button>
      
      
    </form>
      </TabPanel>
      <TabPanel id ="rt" value={value} index="two">
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="UserName" variant="filled" /><p>
        </p>

      <TextField id="outlined-basic" label="password" type="password" variant="filled" />
      <p></p>
      <button id="btn" type="button" class="btn btn-success">Login</button>
    </form>
      </TabPanel>
    </div>
    
  ); 
}


