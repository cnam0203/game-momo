import React, { Component } from 'react'
import logo from '../../image/logo1.png'
import ava from '../../image/thuylinh.png'
import brand from '../../image/brand.png'
import $ from 'jquery';
import { connect } from 'react-redux'
import history from '../../history';

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
        justifyContent: "center",
        alignItems: "center"
        // fontWeight: "bold",
        // margin: '40px 40%',
    },
    container: {
        width: '30%',
        marginLeft: '35%',
        marginRight: '35%',
        display: "flex"
    },
    listChoice: {
    //     marginLeft: '30%'
    //     width: "100%"
    // }
    }
}

// const listCompetitors = [
//     {
//         id: 1,
//         username: "Nam Nguyen",
//         phone: '0909207070',
//         score: 12
//     }, {
//         id: 2,
//         username: "Tring Ngô",
//         phone: '0909207070',
//         score: 12
//     }, {
//         id: 3,
//         username: "Một Võ",
//         phone: '0909207070',
//         score: 12
//     }, {
//         id: 4,
//         username: "Trường Lê",
//         phone: '0909207070',
//         score: 12
//     }, {
//         id: 4,
//         username: "Sang Phùng",
//         phone: '0909207070',
//         score: 12
//     }, {
//         id: 5,
//         username: "Tring Ngô",
//         phone: '0909207070',
//         score: 12
//     }
// ]

class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listMatches: [{
                name: "Trinh Ngô",
                phone: "0123456789",
                status: "Lose"
            }, {
                name: "Thanh Sang",
                phone: "0123456789",
                status: "Win"
            }, {
                name: "Thuy Linh",
                phone: "0123456789",
                status: "Win"
            }, {
                name: "Trinh Ngô",
                phone: "0123456789",
                status: "Lose"
            }],
        }
    }

    componentDidMount() {
        const { userInfo } = this.props
        // $.ajax({
        //     type: "GET",
        //     url: "http://192.168.1.121:5000/history",
        //     beforeSend: function (xhr) {
        //         xhr.setRequestHeader('x-access-token', userInfo.token);
        //       },
        //     success: (data) => {
        //         this.setState({listMatches: data.users})
        //     },
        //     error: (err) => {
        //       alert("Failed")
        //     }})
    }

   render() {

    const { userInfo } = this.props

    return (
        <div style={{backgroundColor: '#a50064', width: '100%', height: '100%'}}>
            <div style={{color: "white", fontWeight: "bold", fontSize: "20px", marginLeft: "90%"}}>{userInfo.name}</div>
            <img src={logo} style={{width:'80px', height: '80px', margin: '20px'}} alt='momo app' onClick={() => history.push('/')}/>
            <img src={brand} style={{width:'150px'}} alt='momo app'/>
            <div style={{width: "100%", textAlign: "center", marginTop: "100px", marginBottom: '40px', fontSize: '60px', fontWeight: "bold", color: "white"}}>HISTORY</div>
            <div style={styles.listChoice}>
                {
                    this.state.listMatches.map((user, index) => {
                        return (
                            <div style={styles.container} key={index}>
                                <div style={styles.button}>
                                    <div style={{width: "8%"}}>{`${index+1} -`}</div>
                                    <div style={{width: "32%"}}>{` ${user.name}`}</div>
                                    <div style={{width: "32%"}}>{` ${user.phone}`}</div>
                                    {
                                        user.status === "Win" ? (
                                            <div style={{width: "5%", color: '#a50064', fontWeight: 'bold'}}>{` ${user.status}`}</div>
                                        ) : (
                                            <div style={{width: "5%", color: '#000', fontWeight: 'bold'}}>{` ${user.status}`}</div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
   }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
    }
}



export default connect(mapStateToProps)(History)