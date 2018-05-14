import React, { Component } from 'react'
import { createUser } from "../../common/Service.jsx"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class SignUpForm extends Component {
    state = {
        name: "",
        password: ""
    }

    getName(e) {
        this.setState({ name: e.target.value })
    }

    getPassword(e) {
        this.setState({ password: e.target.value })
    }

    login() {
        const { name, password } = this.state
        const account = { name: name, password: password }
        createUser(account).then(() => {
            alert("注册成功")
            window.location.href = ``
        })
    }
    render() {
        return (
            <div className='login-form'>
                {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='https://raw.githubusercontent.com/Semantic-Org/Semantic-UI-React/master/docs/app/logo.png' />
                            {' '}注册
                    </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='用户名'
                                    onChange={(e) => this.getName(e)}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='密码'
                                    type='password'
                                    onChange={(e) => this.getPassword(e)}
                                />

                                <Button as="a" onClick={() => this.login()} color='teal' fluid size='large'>注册</Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

