import React, { useEffect } from 'react';
import { Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import HoshimiruApi from '../utils/HoshimiruApi';

const cardHeight = 200; 
const cardWidth = 400;

const useStyles = makeStyles((theme) => ({
    card: {
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        width: cardWidth,
        height: cardHeight,
    },
    content: {
        height: '100%',
        flex: 1,
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(0),
    },
    cover: {
        height: '100%',
        width: '50%',
    },
    activeClassName: {
        textDecoration: 'none',
    },
    dialog: {
        margin: 'auto auto',
    }
}));

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);


export default function BookCard(props) { 
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const init = React.useCallback(async () => {
    }, []);
    useEffect(() => {
        init();
      }, [init]);
    
    return (
        <div className={props.className}>
            <Card
                className={classes.card}
            > 
                <CardMedia
                    className={classes.cover}
                    image={props.starIcon}
                    title="Live from space album cover"
                />  
                <CardContent className={classes.content}>
                    <Typography variant="h6" align="left"> 
                        {props.jpName}
                    </Typography>
                    <Typography variant="body2" align="left">
                        {props.enName}
                    </Typography>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.dialog}>
                        詳細
                    </Button>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                            {props.jpName}
                        </DialogTitle>
                        <DialogContent dividers>
                        <Typography gutterBottom>
                            位置は{props.direction}、 {props.altitude}
                        </Typography>
                        <Typography gutterBottom>
                            {props.content}
                        </Typography>
                        <Typography gutterBottom>
                            {props.origin}
                        </Typography>
                        </DialogContent>
                        <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Close
                        </Button>
                        </DialogActions>
                    </Dialog>
                </CardContent>
            </Card>
        </div>
    );
}