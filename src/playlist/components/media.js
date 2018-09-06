import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {
  render () {
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (
      <div className="Media">
        <div>
          <img src={this.props.image} alt="" width={260} height={160} />
          <h3>{this.props.title}</h3>
          <p>{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}
Media.defaultProps = {
  title: 'titulo de respaldo'
}

export default Media
