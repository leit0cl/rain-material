import { Backdrop, Grid, CircularProgress, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Fuentes } from '../fonts';

export default function Backloader(props) {

    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: 999999999,
            color: '#FFFFFF',
        },
    }));

    const classes = useStyles();

    const handleClose = () => {
        return false;
    };

    return (
        <div>
            <Backdrop className={classes.backdrop} open={props.open} onClick={handleClose}>
                <Grid container style={{ textAlign: 'center' }} spacing={2}>
                    <Grid item xs={12}>
                        <Hidden smDown>
                            <h1 style={{ fontFamily: Fuentes.principal, fontWeight: 800 }}>{'Espere por favor'}</h1>
                            {props.etapa && props.etapa !== '' ? <h2 style={{ fontFamily: Fuentes.principal, fontWeight: 800 }}>{props.etapa}</h2> :
                                <h2 style={{ fontFamily: Fuentes.principal, fontWeight: 800 }}>{props.desde}</h2>}
                        </Hidden>
                        <Hidden mdUp>
                            <h3 style={{ fontFamily: Fuentes.principal, fontWeight: 800 }}>{'Espere por favor'}</h3>
                            {props.etapa && props.etapa !== '' ? <h5 style={{ fontFamily: Fuentes.principal, fontWeight: 800 }}>{props.etapa}</h5> :
                                <h4 style={{ fontFamily: Fuentes.principal, fontWeight: 800 }}>{props.desde}</h4>}
                        </Hidden>
                    </Grid>
                    <Grid item xs={12}>
                        <CircularProgress color="inherit" />
                    </Grid>
                </Grid>
            </Backdrop>
        </div>
    );
}