import React, { Component } from 'react'

export default class CourseHeader extends Component {
    render() {
        return (
            <div>
                <header className="course-select-header">
                    <a href="/" className="to-home"></a>
                    <div className="header-title">
                        <a href="/">FOOD AS MEDICINE</a>
                        <a href="/">MONASH UNIVERSITY</a>
                    </div>
                </header>
                <div className="changing-over"></div>
            </div>
        )
    }
}
