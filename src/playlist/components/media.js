import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends PureComponent {
  state = {
    author: 'Daddy Yankee'
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }
  // handleClick(event) {
  //   console.log(this.props.title)
  // }
  // handleClick = (event) => {
  //   this.setState({
  //     author: 'Mark Zuckerberg'
  //   })
  // }
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
      <div className="Media" onClick={this.props.handleClick}>
        <div>
          <img src={this.props.cover} alt={this.props.title} width={260} height={160} />
          <h3>{this.props.title}</h3>
          <p>{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}
Media.defaultProps = {
  title: 'titulo de respaldo'
}

export default Media
