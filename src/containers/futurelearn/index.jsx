import React, { Component } from 'react'
import CourseHeader from "../../components/header/index"
import CourseContent from "../../components/content/index"
import CourseFooter from "../../components/footer/index"

export default class CourseSelect extends Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <CourseHeader />
                <CourseContent />
                <CourseFooter />
            </div>
        )
    }
}
