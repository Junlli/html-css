$(function () {
    /*1.引入*/
    /*2.结构   data-stellar-background-ratio="0.3"  样式 bg 需要 background-attachment: fixed;*/
    /*3.初始化插件*/
    $.stellar({
        horizontalScrolling: false,
        responsive: true
    });
});

var navObj = document.getElementsByClassName('nav')[0];
var aObj = navObj.getElementsByTagName('a')

function addEvent(elm, evType, fn, useCapture)
{
    if (elm.addEventListener)
    {
        // W3C标准
        elm.addEventListener(evType, fn, useCapture);
        return true;
    }
    else if (elm.attachEvent)
    {
        //IE
        var r = elm.attachEvent('on' + evType, fn);//IE5+
        return r;
    }
    else
    {
        elm['on' + evType] = fn;//DOM事件
    }
}
function hasClass( elements,cName ){
    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
}
function addClass( elements,cName ){
    if( !hasClass( elements,cName ) ){
        elements.className += " " + cName;
    }
}
function removeClass( elements,cName ){
    if( hasClass( elements,cName ) ){
        elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace方法是替换
    }
}
for (var i=0; i<aObj.length; i++) {
    // console.log(aObj[i])
    addEvent(aObj[i], 'mouseover', function () {
        for (var i=0; i<aObj.length; i++) {
            aObj[i].style.backgroundColor = ''
        }
        this.style.backgroundColor = '#12b7f5'
    }, false)
    addEvent(aObj[i], 'mouseout', function () {
        this.style.backgroundColor = ''
    }, false)
    addEvent(aObj[i], 'click', function () {
        for (var i=0; i<aObj.length; i++) {
            removeClass(aObj[i], 'active')
        }
        addClass(this, 'active');
    }, false)
}



