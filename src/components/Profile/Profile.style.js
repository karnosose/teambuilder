export const styles = {
    root: {
        width:500,
        margin:'auto',
        marginTop: 80,
        display: 'flex',
    },
    avatar: {
        height: '100%',
        width: 200,
        margin: 'auto',
        marginTop:20,
        borderRadius: '50%'
    },
    fullName: {
        textAlign: 'center'
    },
    profileDetails: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    },
    editUser: {
        background: '#3f51b5',
        '& button': {
            color: 'white'
        }
    }
}