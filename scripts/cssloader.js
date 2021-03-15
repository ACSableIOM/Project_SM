function loadCSS(cssPath)
{
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;

    var head = document.getElementsByTagName('head')[0];
    head.parentNode.insertBefore(link, head);
}