import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from '@material-ui/core';
import CardEvent from './cardevent';


const columns = [
    { id: 'md', label: 'Понедельник' },
    { id: 'tu', label: 'Вторник' },
    { id: 'wd', label: 'Среда' },
    { id: 'th', label: 'Четверг' },
    { id: 'fr', label: 'Пятница' },
    { id: 'st', label: 'Суббота' },
    { id: 'sd', label: 'Воскресенье' },
];

function CellContent(props) {
    const { cell } = props;
        return (
            <React.Fragment>
                <Grid container item xs={12} spacing={2}>
                    {cell.map((event) => (
                        <Grid item xs={12} sm={12}>
                            <CardEvent title={event.title} image_url={event.image_url} short_info={event.short_info} />
                        </Grid>
                    ))}
                </Grid>
            </React.Fragment>
        );
    }


    // CellContent.propTypes = {
    //     items: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             title: PropTypes.strig.isRequired,
    //             image_url: PropTypes.strig.isRequired,
    //             short_info: PropTypes.strig.isRequired,
    //         }),
    //     ).isRequired,
    // };


    function Row(props) {
        const { row } = props;
        return (
            <React.Fragment>
                <TableRow>
                    <TableCell component="th" scope="row">
                        {row.time}
                    </TableCell>

                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align="center">
                                {typeof value === 'object' ? <CellContent cell={value} /> : ''}
                            </TableCell>
                        );
                    })}

                </TableRow>
            </React.Fragment>
        );
    }

    // Row.propTypes = {
    //     row: PropTypes.shape({
    //         time: PropTypes.string.isRequired,
    //         md: PropTypes.string.isRequired,
    //         tu: PropTypes.string.isRequired,
    //         wd: PropTypes.string.isRequired,
    //         th: PropTypes.string.isRequired,
    //         fr: PropTypes.string.isRequired,
    //         st: PropTypes.string.isRequired,
    //         sd: PropTypes.string.isRequired,
    //     }).isRequired,
    // };


    const useStyles = makeStyles({
        root: {
            width: '100%',
            
        },
        container: {
            maxHeight: '100%',
        },
    });

    export default function MyTable(props) {
        const { rows } = props;
        const classes = useStyles();
        return (
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table responsive={false} stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Time
                            </TableCell >
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={"center"}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        );
    }
