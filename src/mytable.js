import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from '@material-ui/core';
import CardEvent from './cardevent';
import GymCard from './card';



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
            <Grid container direction="column" justify="flex-start" alignItems="center" spacing={1} padding={3}>
                {cell.map((event) => (
                    <Grid item alignContent="center">
                        {/* <CardEvent title={event.title} image_url={event.image_url} short_info={event.short_info} /> */}
                        <GymCard lesson={event}/>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
}


/* CellContent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.strig.isRequired,
            image_url: PropTypes.strig.isRequired,
            short_info: PropTypes.strig.isRequired,
        }),
    ).isRequired,
}; */

const CellStyles = makeStyles({
    root: {
        verticalAlign: "top",
        padding: 8,
        paddingLeft: 0,
        scrollPaddingRight: 0,
    },
});

function Row(props) {
    const classes = CellStyles();
    const { row } = props;
    return (
        <React.Fragment>
            <TableRow>
                <TableCell component="th" scope="row" width="30px">
                    {row.time}
                </TableCell>

                {columns.map((column) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={column.id} className={classes.root} >
                            {typeof value === 'object' ? <CellContent cell={value} /> : ''}
                        </TableCell>
                    );
                })}

            </TableRow>
        </React.Fragment >
    );
}

/*Row.propTypes = {
    row: PropTypes.shape({
        time: PropTypes.string.isRequired,
        md: PropTypes.string.isRequired,
        tu: PropTypes.string.isRequired,
        wd: PropTypes.string.isRequired,
        th: PropTypes.string.isRequired,
        fr: PropTypes.string.isRequired,
        st: PropTypes.string.isRequired,
        sd: PropTypes.string.isRequired,
    }).isRequired,
};*/


const TableStyles = makeStyles({
    container: {
        width: "1260px"
    },
    table:{

    }
});

export default function MyTable(props) {
    const { rows } = props;
    const classes = TableStyles();
    return (
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table" className={classes.table}>
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
    );
}
