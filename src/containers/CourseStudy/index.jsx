import React, { Component } from 'react'
import { Form, Modal, Button, Header, Embed, Icon, Table } from 'semantic-ui-react'

export default class CourseStudy extends Component {
    render() {
        const VideoModal = () => (
            <Modal trigger={<Button>课程视频1</Button>}>
                <Modal.Header>课程视频1</Modal.Header>
                <Modal.Content>
                    <Embed
                        icon='right circle arrow'
                        placeholder='/assets/images/image-16by9.png'
                        url='http://www.myfav.es/jack'
                    />
                </Modal.Content>
            </Modal>
        )
        return (
            <Form>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>
                        商务英语
                    </Header.Content>
                </Header>
                <Table celled fixed singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>课程内容</Table.HeaderCell>
                            <Table.HeaderCell>课程视频</Table.HeaderCell>
                            <Table.HeaderCell>课程作业</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>John</Table.Cell>
                            <Table.Cell><VideoModal /></Table.Cell>
                            <Table.Cell
                                title={[
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                                    'et dolore magna aliqua.',
                                ].join(' ')}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
                    </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell>Shorter description</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill</Table.Cell>
                            <Table.Cell>Denied</Table.Cell>
                            <Table.Cell>Shorter description</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </Form>
        )
    }
}
