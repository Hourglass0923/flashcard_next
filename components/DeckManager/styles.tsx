import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    paper: {
        borderRadius: '6px',
        padding: '10px',
        minHeight: '130px'
    },
    deleteBtn: {
        color: '#ff5f5f',
        float: 'right'
    },
    title: {
        fontSize: '27px',
        margin: '20px 0 10px 0'
    },
    learnBtn: {
        padding: '5px 50px',
        backgroundColor: `${theme.palette.secondary.main}`
    },
    editBtn: {
        color: '#247489'
    }
}));

export default useStyles;