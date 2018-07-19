import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { ReadBlogPageForm } from './ReadBlogPageForm';
import database from '../firebase/firebase'
import { startSetBlogs } from '../actions/blogs'
import { login } from '../actions/auth'
import { startReadBlog } from '../actions/blogs'
import { firebase } from '../firebase/firebase'
import { showBlog } from '../actions/blogs'

export class ReadBlogPage extends React.Component {
    render() {
        this.props.startReadBlog(this.props.match.params.id)
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="title">{this.props.blog.title}</h1>
                        <h2 className="title">By {this.props.blog.name}</h2>
                        <h3 className="title">{moment(this.props.createdAt).format('MMMM Do YYYY')}</h3>
                    </div>
                </div>
                <div className="content-container">
                    <p className="body">{this.props.blog.body}</p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    if (state.blogs.length > 1) {
        return {
            blog: state.blogs.find((blog) => blog.id === props.match.params.id),
            id: state.auth.uid
        }
    } else {
        return {
            blog: state.blogs
        }
    }

}

const mapDispatchToProps = (dispatch) => ({
    startReadBlog: (id) => dispatch(startReadBlog(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ReadBlogPage)