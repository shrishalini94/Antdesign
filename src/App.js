import React from 'react';
import { Button, Divider, Form, Input, Typography,message} from "antd";
import {FacebookFilled,GoogleOutlined,TwitterOutlined} from "@ant-design/icons"
import"./app.css";




function App() {
  const login = () => {
  message.success("Login Successful!");
};
  
    return (
    <div className='appBg'>
      
      <Form className='loginfo' onFinish={login}>
        <Typography.Title>Welcome Back!</Typography.Title>
        <Form.Item rules={[
          {
            required:true,
            type: "email",
            message: "please enter valid email",
          }
        ]}
          name={"myEmail"}>
          <Input placeholder="Enter your email"/> 
        </Form.Item>

        <Form.Item rules={[
          {
            required:true,
            message: "please enter your password",
          }
        ]}
         name={"myPassword"}>
          <Input.Password placeholder="Enter your Password"/> 
        </Form.Item>


        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
        <Divider style={{borderColor: "black"}}> or Login with   </Divider>
         <div className='socialLogin'>
          <GoogleOutlined className="socialIcon" onClick={login} style={{color:"red"}}/>,
          <FacebookFilled className="socialIcon" onClick={login} style={{color:"blue"}} />,
          <TwitterOutlined className="socialIcon" onClick={login} style={{color:"cyan"}}/>
 </div>
      </Form>
    
  
  </div>
  );
}

export default App;
