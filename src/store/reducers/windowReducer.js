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
    // switch (action.type) {
    //   case 'CREATE_PROJECT':
    //     console.log('create project success', action.project);
    //     return state;
    //   case 'CREATE_PROJECT_ERROR':
    //     console.log('create project error', action.error);
    //     return state;
    //   default:
    //     return state;
    // }
    return state;
  };
  
  export default windowReducer;