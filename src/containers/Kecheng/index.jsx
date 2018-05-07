import React from 'react'
import {
    Button, Container, Header, Icon, Image, Item, Label, Menu
} from 'semantic-ui-react'
import { image1 } from "../../img/image1.png"

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
                    <Item.Image src="image1" />
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
                            <Image
                                avatar
                                circular
                                src='/assets/images/wireframe/square-image.png'
                            />
                            Username
            </Item.Extra>
                    </Item.Content>
                </Item>

                <Item>
                    <Item.Image src='../../img/image1.png' />
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
                    <Item.Image src='../../img/image1.png' />
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
