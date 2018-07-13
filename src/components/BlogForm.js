import React from 'react'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

export default class BlogForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.blog ? props.blog.title : '',
            body: props.blog ? props.blog.body : '',
            createdAt: props.blog ? moment(props.blog.createdAt) : moment(),
            calendarFocused: false,
            name: props.blog ? props.blog.name : '',
            error: ''
        }
    }
    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({ title }))
    }
    onBodyChange = (e) => {
        const body = e.target.value
        this.setState(() => ({ body }))
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onNameChange= (e) => {
        const name = e.target.value
        this.setState(() => ({ name }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.body || !this.state.name) {
            this.setState(() => ({ error: 'Please fill out Title AND Body.' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body,
                createdAt: this.state.createdAt.valueOf(),
                name: this.state.name
            })
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                    type="text"
                    placeholder="Title"
                    autoFocus
                    onChange={this.onTitleChange}
                    value={this.state.title}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Body"
                    onChange={this.onBodyChange}
                    value={this.state.body}
                >
                </textarea>
                <input 
                    type="text"
                    placeholder="Author Name"
                    onChange={this.onNameChange}
                    value={this.state.name}
                />
                <button>Save Blog</button>
            </form>
        )
    }
}


