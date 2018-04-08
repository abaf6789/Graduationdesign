import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class CourseHeader extends Component {
    state = {
        tabSelected: {
            li1: true,
            li2: false,
            li3: false
        }
    }
    tabSelect1() {
        this.setState({
            tabSelected: {
                li1: true,
                li2: false,
                li3: false
            }
        })
    }
    tabSelect2() {
        this.setState({
            tabSelected: {
                li1: false,
                li2: true,
                li3: false
            }
        })
    }
    tabSelect3() {
        this.setState({
            tabSelected: {
                li1: false,
                li2: false,
                li3: true
            }
        })
    }
    render() {
        return (
            <div className="cHeader">
                <header className="course-select-header">
                    <a href="/" className="to-home">
                        <Icon name="align left" color="pink" size="huge" />
                    </a>
                    <div className="header-title">
                        <a href="/">FOOD AS MEDICINE</a>
                        <a href="/">MONASH UNIVERSITY</a>
                    </div>
                    <div className="header-bar">
                        <div className="alarm">
                            <a href="/" className="i-alarm">
                                <Icon name="alarm outline" size="large" />
                            </a>
                            <a href="/" className="alarm-LS">LS</a>
                        </div>
                    </div>
                </header>
                <div className="footer-tab">
                    <ul className="changing-over">
                        <li onClick={this.tabSelect1.bind(this)} className={this.state.tabSelected.li1 ? "run-item selected" : "run-item"}>
                            <a>
                                <div className="run-item-icon" style={{ marginLeft: "10px" }}>
                                    <Icon name="sticky note outline" size="big" />
                                </div>
                                <p>To Do</p>
                            </a>
                        </li>
                        <li onClick={this.tabSelect2.bind(this)} className={this.state.tabSelected.li2 ? "run-item selected" : "run-item"}>
                            <a>
                                <div className="run-item-icon" style={{ marginLeft: "8px" }}>
                                    <Icon name="sun" size="big" />
                                </div>
                                <p>Activity</p>
                            </a>
                        </li>
                        <li onClick={this.tabSelect3.bind(this)} className={this.state.tabSelected.li3 ? "run-item selected" : "run-item"}>
                            <a>
                                <div className="run-item-icon">
                                    <Icon name="bullseye" size="big" />
                                </div>
                                <p>Progress</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
