import React from 'react'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

export class BlogForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.blog ? this.props.blog.title : '',
            body: this.props.blog ? this.props.blog.body : '',
            createdAt: this.props.blog ? moment(this.props.blog.createdAt) : moment(),
            calendarFocused: false,
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
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.body) {
            this.setState(() => ({ error: 'Please fill out Title AND Body' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body,
                createdAt: this.state.createdAt.valueOf()
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
                    onChange={this.onTitleChange}
                    value={this.state.title}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                />
                <textarea
                    placeholder="Body"
                    onChange={this.onBodyChange}
                    value={this.state.body}
                >
                </textarea>
                <button>Save Blog</button>
            </form>
        )
    }
}

export default BlogForm










































// import React from 'react'
// import moment from 'moment'
// import 'react-dates/initialize'
// import { SingleDatePicker } from 'react-dates'

// export class BlogForm extends React.Component {
//     state = {
//         title: '',
//         body: '',
//         createdAt: moment(),
//         calendarFocused: false,
//         error: ''
//     }

//     onTitleChange = (e) => {
//         const title = e.target.value
//         this.setState(() => ({ title }))
//     }
//     onBodyChange = (e) => {
//         const body = e.target.value
//         this.setState(() => ({ body }))
//     }
//     onDateChange = (createdAt) => {
//         this.setState(() => ({ createdAt }))
//     }
//     onFocusChange = ({ focused }) => {
//         this.setState(() => ({ calendarFocused: focused}))
//     }
//     onSubmit = (e) => {
//         e.preventDefault()
//         if (!this.state.description || !this.state.amount) {
//             this.setState(() => ({ error: 'Please provide description and amount' }))
//         } else {
//             this.setState(() => ({ error: '' }))
//             this.props.onSubmit({
//                 title: this.state.title,
//                 body: this.state.body,
//                 createdAt: this.state.createdAt.valueOf()
//             })
//         }
//     }

//     render() {
//         return (
//             <form onSubmit={this.onSubmit}>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <input
//                     type="text"
//                     placeholder="Title"
//                     autoFocus
//                     value={this.state.title}
//                     onChange={this.onTitleChange}
//                 />
//                 <SingleDatePicker
//                     date={this.state.createdAt}
//                     onDateChange={this.onDateChange}
//                     focused={this.state.calendarFocused}
//                     onFocusChange={this.onFocusChange}
//                     numberOfMonths={1}
//                     isOutsideRange={() => false}
//                 />
//                 <textarea
//                     placeholder="Add the body of your blog."
//                     onChange={this.onBodyChange}
//                     value={this.state.body}
//                 >
//                 </textarea>
//                 <button>Save Blog</button>
//             </form>
//         )
//     }
// }

// export default BlogForm