import React, { Component } from 'react'
import { Icon, Header, Divider, Form, TextArea, Button } from 'semantic-ui-react'


export default class BackEnd extends Component {
    render() {
        return (
            <Form>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='leanpub' />
                    课程
                <Header.Subheader>
                        管理你的课程列表
                </Header.Subheader>
                </Header>
                <Divider />
                <Form.Field>
                    <label>课程名称</label>
                    <input placeholder='课程名称' />
                </Form.Field>
                <Form.Field>
                    <label>课程详情</label>
                    <input placeholder='课程详情' />
                </Form.Field>
                <Form.Field control={TextArea} label='课程内容' placeholder='编辑课程内容' />
                <Form.Field control={Button}>添加课程内容</Form.Field>
                <Form.Field>
                    <label>课程视频</label>
                    <input placeholder='课程视频' />
                </Form.Field>
                <Form.Field>
                    <label>课程作业</label>
                    <input placeholder='课程作业' />
                </Form.Field>
                <Button fluid>保存</Button>
            </Form>
        )
    }
}
