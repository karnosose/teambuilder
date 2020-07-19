import React, {Component} from 'react';
import { connect } from 'react-redux';

import { editUser, getUsers } from '../../actions/userActions';

class Profile extends Component{

    componentDidMount(){
        this.props.getUsers()
    }

    render(){
        return (
            <div>
                {this.props.currentUser.firstName}
            </div>
        )
    } 

}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    };
  };
  
  const mapDispatchToProprs = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        editUser: editUser
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProprs)(Profile);