import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import HoshimiruApi from '../../utils/HoshimiruApi';
import SearchForm from '../../components/SearchForm';
import StarCard from '../../components/StarCard';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: 'linear-gradient(#30cfd0, #330867)'
    },
    form: {
        margin: theme.spacing(1),
    },
    search: {
        margin: theme.spacing(1),
        borderRadius: '10px',
    },
    button: {
        width : '90vw',
        margin: '0 auto',
    },
    card: {
        margin: theme.spacing(1),
    },
}));

export default function MainPage() {
    const classes = useStyles();
    const [stars, setStars] = React.useState();
    const [params, setParams] = React.useState();
    const init = React.useCallback(async () => {
        const data = await HoshimiruApi().stars.getByBaseData(35.862,139.645,2013-10-31,0,0);
        setStars(data);
        console.log(data);
    }, []);
    useEffect(() => {
        init();
    }, [init]);

    const handleChange = (event) => {
        setParams({
            ...params,
            [event.target.name]: event.target.value
        })
         console.log(event)
    }
    const handleClick = async (event) => {
        const data = await HoshimiruApi().stars.getByBaseData(params.form.lat,params.form.lng,params.form.date,params.form.hour,params.form.min);
        setStars(data);
        console.log(stars)
    }
    const starCards = stars ? stars.result.map((star) => {
        return <StarCard key={star.id} jpName={star.jpName} enName={star.enName} altitude={star.altitude} direction={star.direction} origin={star.origin} content={star.content} starIcon={star.starIcon} className={classes.card} /> 
    }): "";
    
    return (
        <div className={classes.root}>
            <div className={classes.From}>
                <SearchForm  
                    handleChange={handleChange}
                    className={classes.search}
                    name="form"
                />
                <Button variant="contained" onClick={handleClick} className={classes.button} color="primary"da1>星をみる！</Button>
            </div>
            {starCards}
        </div>
    );
}