//...
window.addEventListener( 'scroll', throttle( throttleTimeout, function()
{
    //...
    if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
        removeElementClass( element, elClassHidden );
 
    else if( wScrollDiff > 0 && hasElementClass( element, elClassHidden ) ) // scrolled up; element slides in
        removeElementClass( element, elClassHidden );
 
    else if( wScrollDiff < 0 ) // scrolled down
    {
        if( wScrollCurrent + wHeight >= dHeight && hasElementClass( element, elClassHidden ) ) // scrolled to the very bottom; element slides in
            removeElementClass( element, elClassHidden );
 
        else // scrolled down; element slides out
            addElementClass( element, elClassHidden );
    }
    //...
}));
//...