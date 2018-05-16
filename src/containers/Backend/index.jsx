import React, { Component } from 'react'
import { Icon, Header, Divider, Form, TextArea, Button, Embed } from 'semantic-ui-react'
import { createCourse } from "../../common/Service"


export default class BackEnd extends Component {
    state = {
        name: "",
        details: "",
        contents: [],
        video: [],
        progress: "",
        works: [],
        contentLength: []
    }
    getName(e) {
        this.setState({ name: e.target.value })
    }

    getDetails(e) {
        this.setState({ details: e.target.value })
    }

    getContents(e) {
        const { contents } = this.state
        contents.push(e.target.value)
        this.setState({ contents: contents })
    }

    addContent() {
        const { contentLength } = this.state
        contentLength.push(1)
        this.setState({ contentLength: contentLength })
    }

    getVideo(e) {
        const video = e.target.value
        console.log(video)
        var oFReader = new FileReader()
    }

    saveCourse() {
        const course = {}
        const { name, details, contents, video, works } = this.state
        course.name = name
        course.details = details
        course.contents = contents
        course.video = video
        course.works = works
        createCourse(course).then(() => {
            alert("创建成功")
        })
    }

    render() {
        const { contentLength } = this.state
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
                    <input onChange={(e) => this.getName(e)} placeholder='课程名称' />
                </Form.Field>
                <Form.Field>
                    <label>课程详情</label>
                    <input onChange={(e) => this.getDetails(e)} placeholder='课程详情' />
                </Form.Field>
                {contentLength.map(index => {
                    return (
                        <Form.Field key={index} onChange={(e) => this.getContents(e)} control={TextArea} label='课程内容' placeholder='编辑课程内容' />
                    )
                })}
                <Form.Field control={Button} onClick={() => this.addContent()}>添加课程内容</Form.Field>
                <Form.Field>
                    <label>课程视频</label>
                    <input ref="video" type="file" onChange={(e) => this.getVideo(e)} placeholder='课程视频' />
                </Form.Field>
                <Form.Field>
                    <label>课程作业</label>
                    <input type="file" placeholder='课程作业' />
                </Form.Field>
                <Button onClick={() => this.saveCourse()} fluid>保存</Button>
            </Form>
        )
    }
}
