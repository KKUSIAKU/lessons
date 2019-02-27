import React from 'react';
import PropTypes from 'prop-types'

class Input extends React.Component {


  render(){
    return(
      <input type ={this.props.type}>hello</input>
    )
  }
}

Input.propType = {
  type:PropTypes.oneOf(['text','email','phone','password','textarea']).isRequired
}

Input.defaultProps = {
  type:'text'
}

export default Input;