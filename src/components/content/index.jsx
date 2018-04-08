import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class CourseContent extends Component {
    constructor() {
        super()
        this.state = {
            data: [1, 2, 3, 4]
        }
    }
    render() {
        return (
            <div className="cContent">
                <section>
                    <div className="c-content">
                        <nav className="progress-nav">
                            <ol className="progress-nav-list">
                                {this.state.data.map((item, index) => {
                                    return (
                                        <li key={index} className="progress-nav-list-item">
                                            <Icon name="caret down" />
                                            <a href="aaa">
                                                <div className="list-item">Week {index}</div>
                                                <div className="list-item-bar"></div>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ol>
                        </nav>
                    </div>
                </section>
            </div>
        )
    }
}
