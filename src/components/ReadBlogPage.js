import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

export class ReadBlogPage extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.blog.title}</h1>
                <p>{this.props.blog.body}</p>
                <p>{this.props.blog.name}</p>
                <footer>{moment(this.props.blog.createdAt).format('MMMM Do YYYY')}</footer>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    blog: state.blogs.find((blog) => blog.id === props.match.params.id)
})

export default connect(mapStateToProps)(ReadBlogPage)