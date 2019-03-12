export const closeWindow = (key) => {
    return {
        type: 'CLOSE_WINDOW',
        key
    }
} 

export const minimizeWindow = (key) => {
    return {
        type: 'MINIMIZE_WINDOW',
        key
    }
} 

export const mazimizeWindow = (key) => {
    return {
        type: 'MAXIMIZE_WINDOW',
        key
    }
} 

export const onTopWindow = (key) => {
    return {
        type: 'ONTOP_WINDOW',
        key
    }
} 