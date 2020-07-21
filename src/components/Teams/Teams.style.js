export const styles = {
    root: {
        width:800,
        margin: '10px auto',
        padding:0
    },
    content: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: '0!important'
    },
    title: {
        width:500,
        textAlign: 'center',
        margin: '40px auto',
    },
    description: {
        padding:'20px 40px 20px'
    },
    descAndVotes: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    },
    teamTitle: {
        display: 'flex',
        alignItems: 'center',
        padding:20,
        background: '#3f51b5',
        '& h5': {
            width:110,
            color: 'white',
            fontSize: 20
        }
    }
}