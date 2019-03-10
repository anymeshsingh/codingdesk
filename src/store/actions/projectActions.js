export const updateHtmlState = (html) => {
    return {
        type: 'UPDATE_HTML_STATE',
        html
    }
}

export const updateCssState = (css) => {
    return {
        type: 'UPDATE_CSS_STATE',
        css
    }
}

export const updateJsState = (js) => {
    return {
        type: 'UPDATE_JS_STATE',
        js
    }
}