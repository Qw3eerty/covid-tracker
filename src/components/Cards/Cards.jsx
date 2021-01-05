import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';



const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {

    const dateBuilder = (d) => {
        let months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
        let days = ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];
         
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }

    if( !confirmed ) {
        return 'Loading...';
    }

    return (
        <div className="styles.container">
        <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infectați</Typography>
                    <Typography varaint="h5">
                        <CountUp start={0}end={confirmed.value}duration={2.5}separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{dateBuilder(new Date(lastUpdate))}</Typography>
                    <Typography variant="body2">Total imbolnăviri din cauza virusului COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Vindecați</Typography>
                    <Typography varaint="h5">
                        <CountUp start={0}end={recovered.value}duration={2.5}separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{dateBuilder(new Date(lastUpdate))}</Typography>
                    <Typography variant="body2">Total vindecări de virusul COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Decese</Typography>
                    <Typography varaint="h5">
                        <CountUp start={0}end={deaths.value}duration={2.5}separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{dateBuilder(new Date(lastUpdate))}</Typography>
                    <Typography variant="body2">Total decese din cauza virusului COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
        </div>
    );
}

export default Cards;