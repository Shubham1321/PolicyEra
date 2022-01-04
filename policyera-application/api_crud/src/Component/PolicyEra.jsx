import { Box, Typography, makeStyles } from '@material-ui/core';
import logo from '../Assets/Images/logo.jpeg';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%',

    }
})

const PolicyEra = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Policy Era</Typography>
            <Box style={{display: 'flex'}}>
                <img src={logo} className={classes.image} />
            </Box>
        </Box>
    )
}

export default PolicyEra;