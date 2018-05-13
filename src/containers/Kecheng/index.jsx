import React from 'react'
import {
    Button, Container, Header, Icon, Image, Item, Label, Menu
} from 'semantic-ui-react'

const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
}

const ResponsiveLayout = () => (
    <div>
        <Header
            as='h3'
            content='课程列表'
            style={style.h3}
            textAlign='center'
        />
        <Container>
            <Menu stackable>
                <Menu.Item>
                    <img alt="semantic" src='https://raw.githubusercontent.com/Semantic-Org/Semantic-UI-React/master/docs/app/logo.png' />
                </Menu.Item>
                <Menu.Item>Features</Menu.Item>
                <Menu.Item>Testimonials</Menu.Item>
                <Menu.Item>Sign-in</Menu.Item>
            </Menu>
        </Container>

        <Header
            as='h3'
            content='Responsive Item'
            style={style.h3}
            textAlign='center'
        />
        <Container>
            <Item.Group divided>
                <Item>
                    <Item.Image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526189213454&di=0cff76b7ec174553425eb0cba5a8ae30&imgtype=0&src=http%3A%2F%2Fproxychinapx.thea.cn%2FPublic%2FUpload%2Fimage%2F20171222%2F20171222163346_36866.jpg" />
                    <Item.Content>
                        <Item.Header as='a'>Content Header</Item.Header>
                        <Item.Meta>
                            <span>Date</span>
                            <span>Category</span>
                        </Item.Meta>
                        <Item.Description>
                            A description which may flow for several lines and give context to the content.
            </Item.Description>
                        <Item.Extra>
                            <Button primary floated='right'>
                                Primary
                <Icon name='right chevron' />
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>

                <Item>
                    <Item.Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526189270167&di=cc7acc403aba0ef5cb9bae1edf1c05c0&imgtype=0&src=http%3A%2F%2Fsource.vipabc.com%2Fext%2Fimages%2Fwebsite%2Fabc%2Fnews%2F20160812140123.jpg' />
                    <Item.Content>
                        <Item.Header as='a'>Content Header</Item.Header>
                        <Item.Meta>
                            <span>Date</span>
                            <span>Category</span>
                        </Item.Meta>
                        <Item.Description>
                            A description which may flow for several lines and give context to the content.
            </Item.Description>
                        <Item.Extra>
                            <Button floated='right' primary>
                                Primary
                <Icon name='right chevron' />
                            </Button>
                            <Label>Limited</Label>
                        </Item.Extra>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526189313814&di=59ca8a4e55b620aba37b56ecad43af7c&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F01%2F05%2F01300001069185129153050186971.jpg' />
                    <Item.Content>
                        <Item.Header as='a'>Content Header</Item.Header>
                        <Item.Meta>
                            <span>Date</span>
                            <span>Category</span>
                        </Item.Meta>
                        <Item.Description>
                            A description which may flow for several lines and give context to the content.
            </Item.Description>
                        <Item.Extra>
                            <Button primary floated='right'>
                                Primary
                <Icon name='right chevron' />
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Container>
    </div>
)

export default ResponsiveLayout
