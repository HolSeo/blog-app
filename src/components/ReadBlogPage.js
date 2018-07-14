import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

export class ReadBlogPage extends React.Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="title">{this.props.blog.title}</h1>
                        <h2 className="title">By {this.props.blog.name}</h2>
                        <h3 className="title">{moment(this.props.blog.createdAt).format('MMMM Do YYYY')}</h3>
                    </div>
                </div>
                <div className="content-container">
                    <p>{this.props.blog.body}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    blog: state.blogs.find((blog) => blog.id === props.match.params.id)
})

export default connect(mapStateToProps)(ReadBlogPage)