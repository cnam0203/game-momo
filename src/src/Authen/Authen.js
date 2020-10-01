import React, { Component } from 'react'
import { Form, Input, Button, Tabs, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import './style.scss'
import paper from '../../image/paper.png'
import rock from '../../image/rock.png'
import scissors from '../../image/scissors.png'
import logo from '../../image/logo1.png'

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
    }

    checkRegister = () => {
        
        console.log("sadfsda")
        fetch("http://192.168.190.1:5000/signup", {
            method: "POST",
            body: {
                name: "2432fdas",
                phone: "sdfdsf",
                password: "fdfdsf"
            }
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        // window.location = '/homepage/1234'
    }

    checkLogin = () => {
        window.location = '/homepage/1234'
        // alert("login")
    }

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
                  <div className="card-container">
                    <Tabs tabBarStyle={styles.tabBarStyle} defaultActiveKey="1" centered>
                      <TabPane style={styles.tabPaneContainer} tab={<div style={styles.tabTitle}>ĐĂNG NHẬP</div>} key="1">
                        <div style={styles.formContainer}>
                          <Form style={styles.loginFormContainer} name="basic"
                            initialValues={{
                              remember: true,
                            }}
                            onFinish={() => this.checkLogin() }
                            // onFinishFailed={onFinishFailed}
                          >
                            <Form.Item name="email" rules={[{ required: true, message: 'Please input your phone!' }]}>
                              <Input bordered={false} placeholder="Phone" style={styles.inputStyle} />
                            </Form.Item>
          
                            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                              <Input.Password bordered={false} placeholder="Password" style={styles.inputStyle} />
                            </Form.Item>
                            <div style={{ textAlign: "center" }}>
                              <Form.Item>
                                <Button style={styles.btn} type="primary" htmlType="submit" onClick={() => this.checkLogin()}>ĐĂNG NHẬP</Button>
                              </Form.Item>
                            </div>
                          </Form>
                        </div>
                      </TabPane>
          
                      <TabPane style={styles.tabPaneContainer} tab={<div style={styles.tabTitle}>ĐĂNG KÝ</div>} key="2">
                        <div style={styles.formContainer}>
                          <Form
                            // form={form}
                            name="register"
                            onFinish={() => this.checkRegister()}
                            scrollToFirstError
                            style={styles.registerFormContainer}>
                            <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' },]}>
                              <Input bordered={false} placeholder="Name" style={styles.inputStyle} />
                            </Form.Item>
                            <Form.Item name="phone" rules={[{ required: true, message: 'Please input your phone!' },]}>
                              <Input bordered={false} placeholder="Phone" style={styles.inputStyle} />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!', },]} hasFeedback                >
                              <Input.Password bordered={false} placeholder="Password" style={styles.inputStyle} />
                            </Form.Item>
                            <div style={{ textAlign: "center" }}>
                              <Form.Item>
                                <Button style={styles.btn} type="primary" htmlType="submit" onClick={() => this.checkRegister()}>ĐĂNG KÝ</Button>
                              </Form.Item>
                            </div>
                          </Form>
                        </div>
                      </TabPane>
                    </Tabs>
                  </div>
                </div >
              </div>
        )
    }
}

export default Authen