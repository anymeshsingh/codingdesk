import React, { Component } from 'react';
import { tabToIndent } from '../../Utilities/util';
import { connect } from 'react-redux';
import { updateCssState } from '../../store/actions/projectActions'

export class Css extends Component {
    constructor(){
        super();
        this.state = {
            wrap: 'off',
            content: ''
          }
    }
    componentDidMount(){
      // this.setState({...this.state, content: this.props.content})
      this.setState({...this.props.css});
    }

    componentDidUpdate(previousProps){
      // if((previousProps.content !== this.props.content) && (this.state.content !== this.props.content)){
      //   this.setState({...this.state, content: this.props.content})
      // }
      if((JSON.stringify(previousProps.css) !== JSON.stringify(this.props.css)) && (JSON.stringify(this.state) !== JSON.stringify(this.props.css))){
        this.setState({...this.props.css});
      } 
    }

    handleChange = (content) => {
      this.setState({ ...this.state, content }, ()=>{
        this.props.handleCssChange(this.state);
      })
    }

  render() {
    return (
      <textarea id="css" className="textarea" wrap={this.state.wrap} value={this.state.content} onChange={event => this.handleChange(event.target.value)} onKeyDown={tabToIndent}></textarea>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    css: state.projectState.css
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCssChange: (css) => { dispatch(updateCssState(css)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Css);
