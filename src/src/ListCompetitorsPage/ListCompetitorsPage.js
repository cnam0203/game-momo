import React, { Component } from 'react'
import logo from '../../image/logo1.png'
import ava from '../../image/thuylinh.png'
import brand from '../../image/brand.png'

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
        marginLeft: '40%',
        marginRight: '40%',
        display: "flex"
    },
    listChoice: {
        // marginLeft: '30%'
    //     width: "100%"
    // }
    }
}

const listCompetitors = [
    {
        id: 1,
        username: "Nam Nguyen",
        phone: '0909207070'
    }, {
        id: 2,
        username: "Tring Ngô",
        phone: '0909207070'
    }, {
        id: 3,
        username: "Một Võ",
        phone: '0909207070'
    }, {
        id: 4,
        username: "Trường Lê",
        phone: '0909207070'
    }, {
        id: 4,
        username: "Sang Phùng",
        phone: '0909207070'
    }, {
        id: 5,
        username: "Tring Ngô",
        phone: '0909207070'
    }
]




class ListCompetitorsPage extends Component {
    constructor(props) {
        super(props)
    }

   render() {
    return (
        <div style={{backgroundColor: '#a50064', width: '100%', height: '100%'}}>
            <img src={logo} style={{width:'80px', height: '80px', margin: '20px'}} alt='momo app'/>
            <img src={brand} style={{width:'150px'}} alt='momo app'/>
            <div style={{width: "100%", textAlign: "center", marginTop: "100px", marginBottom: '40px', fontSize: '60px', fontWeight: "bold", color: "white"}}>Competitors</div>
            <div style={styles.listChoice}>
                {
                    listCompetitors.map((user, index) => {
                        return (
                            <div style={styles.container} key={index}>
                                <div style={styles.button}>
                                    <img src={ava} style={{width: '30px', height: '30px', borderRadius: '15px', marginRight: '10px'}} alt="user"/>
                                    {` ${user.username} - ${user.phone}`}
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

export default ListCompetitorsPage