import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { getAllComments, getAllUsers, getUserById } from "../../common/Service"
import moment from 'moment'

export default class Comments extends Component {
    state = {
        comments: [],
        inform: ""
    }

    componentDidMount() {
        getAllComments().then(res => {
            const arr = new Array()
            res && res.data.map(item => {
                return getUserById(item.userId).then(inform => {
                    item.name = inform.data && inform.data.name
                }).then(() => this.setState({ comments: res && res.data }))
            })
        })
    }

    getInform() {
        const newInform = {}
        const { inform, comments } = this.state
        newInform.name = "xiao"
        newInform.content = inform
        newInform.updated = new Date()
        comments.push(newInform)
        console.log(comments, 55)
        this.setState({ comments: comments })
        this.setState({ inform: "" })
    }

    render() {
        const { comments } = this.state
        return (
            <Comment.Group style={{ margin: "200px auto" }}>
                <Header as='h3' dividing>评论</Header>
                {comments.map((item, index) => {
                    return (
                        <Comment key={index}>
                            <Comment.Content>
                                <Comment.Author as='a'>{item.name}</Comment.Author>
                                <Comment.Metadata>
                                    <div>{moment(item.updated).format("YYYY-MM-DD")}</div>
                                </Comment.Metadata>
                                <Comment.Text>{item.content}</Comment.Text>
                                <Comment.Actions>
                                    <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    )
                })}
                <Form reply>
                    <Form.TextArea value={this.state.inform} onChange={(e) => this.setState({ inform: e.target.value })} />
                    <Button content='Add Reply' labelPosition='left' icon='edit' onClick={(e) => this.getInform()} primary />
                </Form>
            </Comment.Group>
        )
    }
}

