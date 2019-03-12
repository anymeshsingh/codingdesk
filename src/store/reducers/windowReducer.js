const initState = {
    htmlEditor: { 
        title: 'HTML Editor',
        isVisible: false,
        maximized: false,
        minimized: false,
        onTop: false
    },
    cssEditor: {
        title: 'CSS Editor',
        isVisible: false,
        maximized: false,
        minimized: false,
        onTop: false
    },
    jsEditor: {
        title: 'Javascript Editor',
        isVisible: false,
        maximized: false,
        minimized: false,
        onTop: false
    },
    browser: {
        title: 'Browser',
        isVisible: false,
        maximized: false,
        minimized: false,
        onTop: false
    },
    codeEditor: {
        title: 'Code Editor',
        isVisible: true,
        maximized: true,
        minimized: false,
        onTop: true
    },
  }
  
  const windowReducer = (state = initState, action) => {
      let key;
    switch (action.type) {
        case 'CLOSE_WINDOW':
            key = action.key
            state = { ...state, [key]: { ...state[key], minimized: false, isVisible: !state[key].isVisible } }
            return state;
        case 'MINIMIZE_WINDOW':
            key = action.key
            state = { ...state, [key]: { ...state[key], maximized: false, minimized: !state[key].minimized}}
            return state;
        case 'MAXIMIZE_WINDOW':
            key = action.key
            state = {...state, [key]: {...state[key], maximized: !state[key].maximized}}
            return state;
        case 'ONTOP_WINDOW':
            key = action.key
            state = {
                ...state,
                htmlEditor:{ ...state.htmlEditor, onTop: false },
                cssEditor:{ ...state.cssEditor, onTop: false },
                jsEditor:{ ...state.jsEditor, onTop: false },
                codeEditor:{ ...state.codeEditor, onTop: false },
                browser:{ ...state.browser, onTop: false },
                [key]: { ...state[key], onTop: true}
              }
            return state;
      default:
            return state;
    }
  };
  
  export default windowReducer;