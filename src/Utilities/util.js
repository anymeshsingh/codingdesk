export const tabToIndent = ( event ) => {
    if ( event.keyCode === 9 ) {
        event.preventDefault();
        // Set up some variables. We need to know the current position of the cursor or selection.
        var selectionStartPos = event.target.selectionStart;
        var selectionEndPos   = event.target.selectionEnd;
        var oldContent        = event.target.value;

        // Set the new content.
        event.target.value = oldContent.substring( 0, selectionStartPos ) + "\t" + oldContent.substring( selectionEndPos );

        // Set the new cursor position (current position + 1 to account for the new tab character).
        event.target.selectionStart = event.target.selectionEnd = selectionStartPos + 1;

        // Prevent the default action (tabbing to the next field or control).
        
    }
}

// export const dragElement = (moveElement, handle) => {
//   console.log('here')
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     if (handle) {
//       /* if present, the header is where you move the DIV from:*/
//       handle.onMouseDown() = (e) => {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onMouseUp() = () => {
//           /* stop moving when mouse button is released:*/
//           document.onMouseUp = null;
//           document.onMouseMove = null;
//         }
//         // call a function whenever the cursor moves:
//         document.onMouseMove() = (e) => {
//           e = e || window.event;
//           e.preventDefault();
//           // calculate the new cursor position:
//           pos1 = pos3 - e.clientX;
//           pos2 = pos4 - e.clientY;
//           pos3 = e.clientX;
//           pos4 = e.clientY;
//           // set the element's new position:
//           moveElement.style.top = (moveElement.offsetTop - pos2) + "px";
//           moveElement.style.left = (moveElement.offsetLeft - pos1) + "px";
//         };
//       };
//     } else {
//       /* otherwise, move the DIV from anywhere inside the DIV:*/
//       moveElement.onMouseDown() = (e) => {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onMouseUp() = () => {
//           /* stop moving when mouse button is released:*/
//           document.onMouseUp = null;
//           document.onMouseMove = null;
//         }
//         // call a function whenever the cursor moves:
//         document.onMouseMove() = (e) => {
//           e = e || window.event;
//           e.preventDefault();
//           // calculate the new cursor position:
//           pos1 = pos3 - e.clientX;
//           pos2 = pos4 - e.clientY;
//           pos3 = e.clientX;
//           pos4 = e.clientY;
//           // set the element's new position:
//           moveElement.style.top = (moveElement.offsetTop - pos2) + "px";
//           moveElement.style.left = (moveElement.offsetLeft - pos1) + "px";
//         };
//       };
//     }
  
//   }