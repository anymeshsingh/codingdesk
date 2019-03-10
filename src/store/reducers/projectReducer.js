const initState = {
    html: {content: '<!--Add your HTML here-->\n<h1 id="h1">Hello World</h1>', wrap: 'off'},
    css: {content: '/*CSS goes here!*/', wrap: 'off'},
    js: {content: '//JS goes here', wrap: 'off' }     
  }
  
  const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_HTML_STATE':
            return {
                ...state,
                html: action.html
            }
        case 'UPDATE_CSS_STATE':
            return {
                ...state,
                css: action.css
            }
        case 'UPDATE_JS_STATE':
            return {
                ...state,
                js: action.js
            }
        default:
            return state;
    }
  };
  
  export default projectReducer;