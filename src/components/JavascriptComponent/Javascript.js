import React, { Component } from 'react';
import { tabToIndent } from '../../Utilities/util';
import { connect } from 'react-redux';
import { updateJsState } from '../../store/actions/projectActions'

export class Javascript extends Component {
    constructor(){
        super();
        this.state = {
            wrap: 'off',
            content: ''
        }
    }
    componentDidMount(){
      // this.setState({...this.state, content: this.props.content})
      this.setState({...this.props.js});
    }

    componentDidUpdate(previousProps){
      // if((previousProps.content !== this.props.content) && (this.state.content !== this.props.content)){
      //   this.setState({...this.state, content: this.props.content})
      // }

      if((JSON.stringify(previousProps.js) !== JSON.stringify(this.props.js)) && (JSON.stringify(this.state) !== JSON.stringify(this.props.js))){
        this.setState({...this.props.js});
      }      

    }

    handleChange = (content) => {
      this.setState({ ...this.state, content }, ()=>{
        this.props.handleJsChange(this.state);
      })
    }

  render() {
    return (
      <textarea className="textarea" wrap={this.state.wrap} value={this.state.content} onChange={event => this.handleChange(event.target.value)} onKeyDown={tabToIndent}></textarea>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    js: state.projectState.js
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleJsChange: (js) => { dispatch(updateJsState(js)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Javascript);
