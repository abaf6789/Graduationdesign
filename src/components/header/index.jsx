import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class CourseHeader extends Component {
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
                        <li className="run-item">
                            <a href="/">
                                <Icon name="sticky note outline" size="big" />
                            </a>
                        </li>
                        <li className="run-item">
                            <a href="/">
                                <Icon name="sun" size="big" />
                            </a>
                        </li>
                        <li className="run-item">
                            <a href="/">
                                <Icon name="bullseye" size="big" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
