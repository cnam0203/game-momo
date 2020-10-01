import React, { Component } from 'react'
import logo from '../../image/logo1.png'
import ava from '../../image/thuylinh.png'
import brand from '../../image/brand.png'
import scissor from '../../image/scissors.png'
import paper from '../../image/paper.png'
import rock from '../../image/rock.png'

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




class RankPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false
        }
    }

   render() {
    return this.state.isReady ? (
        <div style={{backgroundColor: '#a50064', width: '100%', height: '100%'}}>
            <img src={logo} style={{width:'80px', height: '80px', margin: '20px'}} alt='momo app'/>
            <img src={brand} style={{width:'150px'}} alt='momo app'/>
        <div style={{width: "100%", textAlign: "center", marginTop: "20px", marginBottom: '40px', fontSize: '60px', fontWeight: "bold", color: "white"}}>{`RoomID: ${1234}`}</div>
            <div>{`Hiệp: ${1}`}</div>
            <div>{`Username: Thùy Linh`}</div>
            <div>{`Phone     : 0909101010`}</div>
            <div>{`Competitor: ${competitor.name}`}</div>
            <div>{`Phone     : ${competitor.phone}`}</div>
            <img src={scissor} alt="scissor"/>
            <img src={paper} alt="paper"/>
            <img src={rock} alt="rock"/>
        </div>
        ) : null
   }
}

export default RankPage