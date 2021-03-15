var enlargeTextElement = null;

function createCssElement(path)
{
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;

    return link;
}

function loadCssIntoPage(linkElement)
{
    var head = document.getElementsByTagName('head')[0];
    head.parentNode.insertBefore(linkElement, head);
}

function toggleAccessibilityType(type)
{
    if (type == "enlargeText")
    {
        if (enlargeTextElement == null)
        {
            enlargeTextElement = createCssElement("styles/text-enlarge.css");

            loadCssIntoPage(enlargeTextElement);
        }
        else 
        {
            enlargeTextElement.disabled = true;
            enlargeTextElement.parentNode.removeChild( enlargeTextElement );
            enlargeTextElement.href = "data:text/css,"; 

            enlargeTextElement = null;
        }
    }
}