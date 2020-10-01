import React, { Component } from 'react'
import Authen from '../Authen/Authen'
import logo from '../../image/logo1.png'
import brand from '../../image/brand.png'
import { connect } from 'react-redux'
import { onSignOut } from '../../actions'
import history from '../../history';

const styles = {
    button: {
        width: '100%',
        display: "block",
        height: "40px",
        color: "#a50064",
        textAlign: "center",
        fontSize: '20px',
        borderRadius: "20px",
        margin: '10px 0px',
        cursor: 'pointer',
        borderWidth: '0px'
        // fontWeight: "bold",
        // margin: '40px 40%',
    },
    container: {
        width: '20%',
        marginLeft: '40%',
        marginRight: '40%',
    },
    listChoice: {
        // marginLeft: '30%'
    //     width: "100%"
    // }
    }
}


class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    showHistory = () => {
        history.push('/history')
    }

    showRank = () => {
        history.push('/rankPage')
    }

    logOut = () => {
        this.props.onSignOut()
    }

    matchCompetitor = () => {
        history.push('/roomPage/1234')
    }

    render() {
        const { isSignIn, userInfo } = this.props

        return isSignIn ? (
            <div style={{backgroundColor: '#a50064', width: '100%', height: '100%'}}>
                <div style={{color: "white", fontWeight: "bold", fontSize: "20px", marginLeft: "90%"}}>{userInfo.name}</div>
                <img src={logo} style={{width:'80px', height: '80px', margin: '10px'}} alt='momo app'/>
                <img src={brand} style={{width:'150px'}} alt='momo app'/>
                <div style={{ width: "100%", textAlign: "center", marginTop: "100px", marginBottom: '40px', fontSize: '60px', fontWeight: "bold", color: "white"}}>Menu</div>
                <div style={styles.listChoice}>
                    <div style={styles.container}>
                        <button style={styles.button} onClick={() => this.matchCompetitor()}>BẮT ĐẦU</button>
                    </div>
                    <div style={styles.container}>
                        <button style={styles.button} onClick={() => this.showHistory()}>LỊCH SỬ</button>
                    </div>
                    <div style={styles.container}>
                        <button style={styles.button} onClick={() => this.showRank()}>XẾP HẠNG</button>
                    </div>
                    <div style={styles.container}>
                        <button style={styles.button} onClick={() => this.logOut()}>THOÁT</button>
                    </div>
                </div>
            </div>
        ) : <Authen/>
    }
}

const mapStateToProps = (state) => {
    return {
        isSignIn: state.isSignIn,
        userInfo: state.userInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignOut: () => {dispatch(onSignOut())}
      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)