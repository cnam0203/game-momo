import React, { Component } from 'react'
import logo from '../../image/logo1.png'
import ava from '../../image/thuylinh.png'
import brand from '../../image/brand.png'
import scissor from '../../image/scissors.png'
import paper from '../../image/paper.png'
import rock from '../../image/rock.png'
import LoadingMask from "react-loadingmask";
import Loader from 'react-loader-spinner';
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

const RESET_INTERVAL_S = 10

const formatTime = (time) =>
  `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
    time % 60
  ).padStart(2, "0")}`;

const Timer = ({ time }) => {
  const timeRemain = RESET_INTERVAL_S - (time % RESET_INTERVAL_S);

  return timeRemain > 0 ? (
    <>
        <div style={{width: '100%', display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: '100px'}}>
            <div style={{width: '200px', color: '#a50064', background: 'white', textAlign: 'center', fontSize: '40px', borderRadius: '20px'}}>{formatTime(timeRemain)}</div>
        </div>
    </>
  ) :  (
    <>
        <div style={{width: '100%', display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: '100px', borderRadius: '20px'}}>
            <div style={{width: '200px', color: '#a50064', background: 'white', textAlign: 'center', fontSize: '40px', borderRadius: '20px'}}>{`00:00`}</div>
        </div>
    </>
    )
};



class RoomPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isWaiting: false,
            result: 'pending',
            choice: "RESULT",
            time: 0
        }
    }

    play = (choice) => {
        this.setState({isWaiting: true, choice: choice})
    }

    timerId = null;


    componentDidMount = () => {
        this.timerId = setInterval(() => {
            this.setState((prevState) => ({ time: prevState.time + 1 }));
          }, 1000);

        setTimeout(() => {
            clearInterval(this.timerId)
            this.setState({isWaiting: true})
            setTimeout(() => {
                this.setState({isWaiting: false})
                this.setState({result: "win"})
            }, 5000)
        }, 10000)
    }
    

   render() {
    
    const { room, userInfo } = this.props
    console.log(userInfo)
    console.log(room)

    return (
        <div style={{backgroundColor: '#a50064', width: '100%', height: '100%'}}>
            <img src={logo} style={{cursor: "pointer", width:'80px', height: '80px', margin: '20px'}} alt='momo app' onClick={() => history.push('/')}/>
            <img src={brand} style={{width:'150px'}} alt='momo app'/>
        <div style={{width: "100%", textAlign: "center", marginTop: "20px", marginBottom: '40px', fontSize: '60px', fontWeight: "bold", color: "white"}}>{`RoomID: ${room.roomID}`}</div>
            <div style={{width: '100%', display: 'flex'}}>
                <div style={{width: '100%', marginLeft: '20%', color: 'white', fontSize: '30px', fontWeight: 'bold'}}>{`Player: ${userInfo.name}`}</div>
                <div style={{width: '100%', color: 'white', fontSize: '30px', fontWeight: 'bold'}}>{`Competitor: ${room.competitor}`}</div>
            </div>
            {
                this.state.result === "pending" ? (
                    <div>
                        <Timer time={this.state.time} />
                    {
                        this.state.isWaiting ? (
                            <div>
                                <div style={{backgroundColor: '#a50064', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '10%'}}>
                                    <Loader type="ThreeDots" color="#fff" height="100" width="100"/>
                                </div>
                                <div style={{backgroundColor: '#a50064', width: '100%', height: '100%', textAlign: 'center', color: 'white', fontSize: '30px', fontWeight: 'bold'}}>
                                {`Your ${this.state.choice} will be ...`}
                                </div>
                            </div>
                        ) : (
                            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px'}}>
                                <img src={scissor} alt="scissor" style={{cursor: "pointer", marginRight: "25px", marginLeft: "25px"}} onClick={() => this.play('SCISSOR')}/>
                                <img src={paper} alt="paper" style={{cursor: "pointer", marginRight: "25px", marginLeft: "25px"}} onClick={() => this.play('PAPER')}/>
                                <img src={rock} alt="rock" style={{cursor: "pointer", marginRight: "25px", marginLeft: "25px"}} onClick={() => this.play('ROCK')}/>
                            </div>
                        ) 
                     }
                    </div>
                ) : this.state.result === "win" ? (
                    <div>
                    <div style={{width: '100%', color: 'white', fontSize: '60px', fontWeight: 'bold', textAlign: 'center', marginTop: '100px'}}>
                        YOU WIN
                    </div>
                    <div style={styles.container}>
                        <button style={styles.button} onClick={() => history.push('/waitingRoomPage')}>REPLAY</button>
                    </div>
                    <div style={styles.container}>
                        <button style={styles.button} onClick={() => history.push('/')}>BACK HOME</button>
                    </div>
                    </div>
                ) : (
                    <div>
                    <div style={{width: '100%', color: 'white', fontSize: '60px', fontWeight: 'bold', textAlign: 'center', marginTop: '100px'}}>
                        YOU LOOSE
                    </div>
                    <div style={styles.container}>
                        <button style={styles.button} onClick={() => history.push('/waitingRoomPage')}>REPLAY</button>
                    </div>
                    <div style={styles.container}>
                        <button style={styles.button} onClick={() => history.push('/')}>BACK HOME</button>
                    </div>
                    </div>
                )
            }
        </div>
        )
   }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        room: state.room
    }
}



export default connect(mapStateToProps)(RoomPage)