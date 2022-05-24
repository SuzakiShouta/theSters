import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      backGroundColor: '#FFFFFF',
    },
  },
}));

const getInitialState = () => {
    // ネストされたオブジェクトを用意
    return {
            lat: '',
            lng: '',
            date: '',
            hour: '',
            min: ''
    };
}

export default function SearchForm(props) {
  const classes = useStyles();
  const [data, setData] = React.useState(props.data ? props.data : getInitialState());

    const handleChange = (event) => {
        data[event.target.name] = event.target.value;
        const searchFormEvent = {
            target: {
                name: props.name,
                value: data,
            },
        } 
        props.handleChange && props.handleChange(searchFormEvent)
        setData({...data})
    }

  return (
    <div className={props.className}>
      <form className={classes.root} noValidate autoComplete="off">
          <TextField 
            label="lat" 
            type=" number"
            variant="outlined" 
            name="lat"
            value={data.lat}
            onChange={handleChange}
          />
          <TextField 
            label="lng" 
            variant="outlined" 
            name="lng"
            value={data.lng}
            onChange={handleChange}
          />
          <TextField 
            label="date" 
            variant="outlined" 
            name="date"
            value={data.date}
            onChange={handleChange}
          />
          <TextField 
            label="hour" 
            variant="outlined" 
            name="hour"
            value={data.hour}
            onChange={handleChange}
          />
          <TextField 
            label="min" 
            variant="outlined" 
            name="min"
            value={data.min}
            onChange={handleChange}
          />
      </form>
    </div>
  );
}