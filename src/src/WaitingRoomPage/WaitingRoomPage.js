import React, { Component } from 'react'
import logo from '../../image/logo1.png'
import ava from '../../image/thuylinh.png'
import brand from '../../image/brand.png'
import scissor from '../../image/scissors.png'
import paper from '../../image/paper.png'
import rock from '../../image/rock.png'
import LoadingMask from "react-loadingmask";
import Loader from 'react-loader-spinner';
import history from '../../history';
import { createNewRoom } from '../../actions'
import { connect } from 'react-redux'

const styles = {
    button: {
        width: '100%',
        display: "flex",
        height: "40px",
        color: "#a50064",
        textAlign: "center",
        fontSize: '20px',
        borderRadius: "20px",
        margin: '10px 0px',
        cursor: 'pointer',
        borderWidth: '0px',
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        // fontWeight: "bold",
        // margin: '40px 40%',
    },
    container: {
        width: '25%',
        marginLeft: '38%',
        marginRight: '40%',
        display: "flex"
    },
    listChoice: {
        // marginLeft: '30%'
    //     width: "100%"
    // }
    }
}

const competitor = {
    name:  "Sang Phùng",
    phone: "0123456789"
}




class WaitingRoomPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false
        }
    }

    componentDidMount() {
        setTimeout(()=> {
            this.props.createNewRoom({
                roomID: '1234',
                competitor: 'Nguyen Van A'
            })
            // setTimeout(() => {
            history.push('/roomPage/1234')
            // }, 2000)
        }, 5000)
    }

   render() {
    return (
            <div>
            <div style={{backgroundColor: '#a50064', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '20%'}}>
                <Loader type="ThreeDots" color="#fff" height="100" width="100"/>
            </div>
            <div style={{backgroundColor: '#a50064', width: '100%', height: '100%', textAlign: 'center', color: 'white', fontSize: '30px', fontWeight: 'bold'}}>
                Waiting
            </div>
            </div>
        )
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewRoom: (room) => {dispatch(createNewRoom(room))}
      }
    }

export default connect(null, mapDispatchToProps)(WaitingRoomPage)