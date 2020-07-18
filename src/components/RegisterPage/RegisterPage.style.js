export const styles = {
  form : {
    margin: 'auto',
    textAlign: 'center',
    marginTop:40
  },
  formFields: {
    width:500,
    display:'flex',
    flexDirection: 'column',
    marginTop:40,
    margin: 'auto',
    '& div': {
      // width: 500
    }
  },
  formField: {
    margin: '10px 0',
    width: 500
  },
  dataPicker: {
    width: '100%'
  },
  dateField: {
    border: 0,
    margin: '10px 0',
    display: 'inline-flex',
    padding: 0,
    position: 'relative',
    minWidth: 0,
    width: '100%',
    // flexDirection: 'column',
    verticalAlign: 'top',
    '& label': {
      marginRight:20
    },
    '& input': {
      font: 'inherit',
      color: 'currentColor',
      height: '3.6em',
      margin: 0,
      display: 'block',
      minWidth: 0,
      background: 'none',
      boxSizing: 'border-box',
      animationName: 'mui-auto-fill-cancel',
      letterSpacing: 'inherit',
      animationDuration: '10ms',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      borderRadius:4,
      padding: '18.5px 14px',
      width:440,
    }
  },
  sexForm:{
    width:200,
    display: 'flex',
    justifyContent: 'flex-start'
  },
  numberField: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
    width:'100%'
  },
  registerButton: {
    margin: '40px 0 80px 0'
  }
}