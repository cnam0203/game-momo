import React, { Component } from 'react'
import { Form, Input, Button, Tabs, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import './style.scss'
import './signinmodal.css'
import paper from '../../image/paper.png'
import rock from '../../image/rock.png'
import scissors from '../../image/scissors.png'
import logo from '../../image/logo1.png'
import $ from 'jquery';
import { connect } from 'react-redux'
import { onSignIn } from '../../actions'

const { TabPane } = Tabs;

const styles = {
    root: {
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "#a50064",
      height: "100vh",
  
    },
    tabBarStyle: {
      textAlign: "center",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    tabTitle: {
      width: 170,
      textAlign: "center",
    },
    tabPaneContainer: {
      color: "white",
      paddingBottom: 20
    },
    formContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 10
    },
    loginFormContainer: {
      width: "80%",
    },
    registerFormContainer: {
      width: "80%",
    },
    btn: {
      backgroundColor: "#a50064",
      borderColor: "#a50064",
      fontSize: 16,
      textAlign: 'center',
      height: 36,
      marginTop: 10
    },
    inputStyle: {
      borderBottom: "1px solid purple",
    }
  }


class Authen extends Component {
    constructor(props) {
        super(props)
        this.state = {
          signUp: true,
          email: '',
          password: '',
          username: '',
      }
      this.signUp = this.signUp.bind(this)
      this.logIn = this.logIn.bind(this)
    }

    signUp() {
      console.log(this.state.email, this.state.password)
      // fetch('/register', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //         // 'Content-Type': 'application/x-www-form-urlencoded',
      //       },
      //     body: JSON.stringify({
      //         email: this.state.email,
      //         username: this.state.username,
      //         password: this.state.password
      //     })
      // })
      // .then((res) => res.json())
      // .then((res) => {
      //     if (res.validator !== undefined) {
      //         alert(res.validator[0].msg)
      //     } else if (res.errors !== undefined) {
      //         alert(res.errors)
      //     } else {
      //         this.setState({signUp: true})
      //         this.setState({email: ''})
      //         this.setState({username: ''})
      //         this.setState({password: ''})
      //         this.props.onSignIn(res.user)
      //         alert('Signed Up successfully !!!')
      //     }
      // })
      // .catch((err) => console.log(err))
      // $.post("http://192.168.1.121:5000/signup",
      //   {
      //     name: this.state.username,
      //     phone: this.state.email,
      //     password: this.state.password
      //   },
      //   function(data, statusCode){
      //     if (statusCode === "success") {
      //       this.setState({signUp: true})
      //       this.setState({email: ''})
      //       this.setState({username: ''})
      //       this.setState({password: ''})
      //       this.props.onSignIn(data)
      //     }
      //   });
      $.ajax({
        type: "POST",
        data: {name: this.state.username,
              phone: this.state.email,
              password: this.state.password},
        url: "http://192.168.1.104:5000/signup",
        success: (data) => {
            this.setState({signUp: true})
            this.setState({email: ''})
            this.setState({username: ''})
            this.setState({password: ''})
            this.props.onSignIn(data)
        }
    }) 
  }

  logIn() {
    console.log(this.state.email)
    console.log(this.state.password)
    $.ajax({
      type: "POST",
      data: {
            phone: this.state.email,
            password: this.state.password},
      url: "http://192.168.1.104:5000/login",
      success: (data) => {
          this.setState({signUp: true})
          this.setState({email: ''})
          this.setState({username: ''})
          this.setState({password: ''})
          this.props.onSignIn(data)
      },
      error: (err) => {
        alert("Failed")
      }
      
  }) 
  }
    // checkRegister = () => {
    //     console.log("sadfsd32423")
    //     fetch("http://192.168.1.121:5000/signup", {
    //         method: "POST",
    //         body: {
    //             name: "2432fdas",
    //             phone: "sdfdsf",
    //             password: "fdfdsf"
    //         }
    //     })
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err))
    //     // window.location = '/homepage/1234'
    // }

    // checkLogin = () => {
    //     window.location = '/homepage/1234'
    //     // alert("login")
    // }

    render() {

        // const [form] = Form.useForm();

        return (
            <div style={{
                position: 'relative',
                overflow: "hidden"
              }}>
                {/* <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div> */}
          
                <div style={styles.root}>
                  <NavLink to='/' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                      {/* <div style={{marginTop: 80, display: "flex"}}> */}
                        <img style={{ marginTop: 80, height: '150px', animation: "mymove 6s infinite" }} src={logo} alt="momo logo"></img>
                        {/* <img style={{ width:'33%', height: '150px', animation: "mymove 6s infinite" }} src={rock} alt="momo logo"></img>
                        <img style={{ width:'33%', height: '150px', animation: "mymove 6s infinite" }} src={scissors} alt="momo logo"></img> */}
                      {/* </div> */}
                    {/* <img style={{ height: 55, marginBottom: 10, }} src={brand} alt="bidesigner brand"></img> */}
                  </NavLink>
                  <div style={{width: '100%', fontSize: '60px', color: 'white', textDecoration: 'none', border: '0px', textAlign: 'center', margin: '15px 0px', fontWeight: 'bold'}}>Oẳn Tù Tì</div>
                  <div id="signin-modal" >
                <div id="modal-content">
                    <div className="sign-div" onClick={() => this.setState({signUp: true})} 
                            style={this.state.signUp === true ? {backgroundColor: '#a50064', color: 'white', fontWeight: 'bold'} : {backgroundColor: 'white', color: 'black'}}>
                                SIGN UP</div>
                    <div className="sign-div" onClick={() => this.setState({signUp: false})}
                            style={this.state.signUp === false ? {backgroundColor: '#a50064', color: 'white', fontWeight: 'bold'} : {backgroundColor: 'white', color: 'black'}}>
                                LOG IN</div>
                    <div id="sign-up">
                        <input  autoComplete="off" readOnly 
    onFocus={(e) => e.target.removeAttribute('readonly')}  className="input-sign-in" type="text" value={this.state.email} placeholder="Phone" onChange={(e) => this.setState({email: e.target.value})}></input>
                        {
                            this.state.signUp === true ? (
                                <input autoComplete="off" readOnly 
                                onFocus={(e) => e.target.removeAttribute('readonly')} className="input-sign-in" type="text" value={this.state.username} placeholder="Username" onChange={(e) => this.setState({username: e.target.value})}></input>
                            ) : null
                        }
                        <input autoComplete="off" readOnly 
    onFocus={(e) => e.target.removeAttribute('readonly')} className="input-sign-in" type="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}></input>
                    </div>
                    {
                        this.state.signUp === true ? (
                            <div onClick={() => this.signUp()} className="input-sign-in btn-sign-in">REGISTER</div>
                        ) : (
                            <div onClick={() => this.logIn()} className="input-sign-in btn-sign-in">LOG IN</div>
                        )
                    }
                    {/* <div onClick={() => this.logInGoogle()} className="input-sign-in btn-sign-in" style={{backgroundColor: 'white', border: '1px solid black', color: 'black'}}>
                        <i className="fa fa-google" aria-hidden="true" style={{marginRight: 10}}></i>GOOGLE</div> */}
                </div>
            </div>
                </div >
              </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onSignIn: (user) => {dispatch(onSignIn(user))}
    }
  }

export default connect(null, mapDispatchToProps)(Authen)