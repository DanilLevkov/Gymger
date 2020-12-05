import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from '@material-ui/core';
import CardEvent from './cardevent';
import PropTypes from 'prop-types';


function Cell(props) {
    const { items } = props;
    return (
        <React.Fragment>
            <TableCell align="center">
                <Grid container item xs={12} spacing={2}>
                    {items.map((event) => (
                        <Grid item xs={12} sm={12}>
                            <CardEvent title={event.title} image_url={event.image_url} short_info={event.short_info} />
                        </Grid>
                    ))}
                </Grid>
            </TableCell>
        </React.Fragment>
    );
}


Cell.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.strig.isRequired,
            image_url: PropTypes.strig.isRequired,
            short_info: PropTypes.strig.isRequired,
        }),
    ).isRequired,
};


function Row(props) {
    const { row } = props;
    return (
        <React.Fragment>
            <TableRow>
                <TableCell component="th" scope="row">
                    {row.time}
                </TableCell>
                <TableCell align="center"><Cell props={row.md}> </Cell> </TableCell>
                <TableCell align="center"><Cell props={row.tu}> </Cell> </TableCell>
                <TableCell align="center"><Cell props={row.wd}> </Cell> </TableCell>
                <TableCell align="center"><Cell props={row.th}> </Cell> </TableCell>
                <TableCell align="center"><Cell props={row.fr}> </Cell> </TableCell>
                <TableCell align="center"><Cell props={row.st}> </Cell> </TableCell>
                <TableCell align="center"><Cell props={row.sd}> </Cell> </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
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
};


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const columns = [
    { id: 'md', label: 'Monday' },
    { id: 'tu', label: 'Tuesday' },
    { id: 'wd', label: 'Monday' },
    { id: 'th', label: 'Monday' },
    { id: 'fr', label: 'Monday' },
    { id: 'st', label: 'Monday' },
    { id: 'sd', label: 'Monday' },
];

const rows = [
    {
        time: '18:30',
        md: [
            {
                tiltle: "Gym",
                image_url: "https://source.unsplash.com/random/?science",
                short_info: "Some info",
            },
            {
                tiltle: "Gym2",
                image_url: "https://source.unsplash.com/random/?science",
                short_info: "Some info2",
            },
        ],
        wd: [
            {
                tiltle: "Gym Wen",
                image_url: "https://source.unsplash.com/random/?computer",
                short_info: "Some info",
            },
            {
                tiltle: "Gym yuuuf",
                image_url: "https://source.unsplash.com/random/?computer",
                short_info: "Some info2",
            },
        ],
        fr: [
            {
                tiltle: "Lazy",
                image_url: "https://source.unsplash.com/random/?computer",
                short_info: "Some info lazy",
            },
        ]
    },
    {
        time: '12:30',
        md: [
            {
                tiltle: "Gym morning",
                image_url: "https://source.unsplash.com/random/?science",
                short_info: "Some info",
            },
            {
                tiltle: "Gym2",
                image_url: "https://source.unsplash.com/random/?science",
                short_info: "Some info2",
            },
        ],
        wd: [
            {
                tiltle: "Gym Wen",
                image_url: "https://source.unsplash.com/random/?computer",
                short_info: "Some info",
            },
            {
                tiltle: "Gym yuuuf",
                image_url: "https://source.unsplash.com/random/?computer",
                short_info: "Some info2",
            },
        ],
        fr: [
            {
                tiltle: "Lazy",
                image_url: "https://source.unsplash.com/random/?computer",
                short_info: "Some info lazy",
            },
        ]
    },
];

//Сортировка
rows.sort((a, b) => a.time > b.time);

export default function StickyHeadTable(props) {
    //const { rows } = props;
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Time
                            </TableCell>
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
                            <Row key={row.time} row={row} />
                        ))}



                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            <TableCell component="th" scope="row">
                                {row.time}
                            </TableCell>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                );
                            })}
                        </TableRow>


                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
