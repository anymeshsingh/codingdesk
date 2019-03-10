import React, { Component } from 'react';
import { tabToIndent } from '../../Utilities/util';
import { connect } from 'react-redux';
import { updateHtmlState } from '../../store/actions/projectActions';

export class Html extends Component {
    constructor(){
        super();
        this.state = {
            wrap: 'off',
            content: ''
        }
    }
    componentDidMount(){
      // this.setState({...this.state, content: this.props.content});
      this.setState({...this.props.html});
    }

    componentDidUpdate(previousProps){
      // if((previousProps.content !== this.props.content) && (this.state.content !== this.props.content)){
      //   this.setState({...this.state, content: this.props.content})
      // }

      if((JSON.stringify(previousProps.html) !== JSON.stringify(this.props.html)) && (JSON.stringify(this.state) !== JSON.stringify(this.props.html))){
        this.setState({...this.props.html});
      } 
    }

    handleChange = (content) => {
      this.setState({ ...this.state, content }, ()=>{
        this.props.handleHtmlChange(this.state);
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
    html: state.projectState.html
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleHtmlChange: (html) => { dispatch(updateHtmlState(html)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Html);
