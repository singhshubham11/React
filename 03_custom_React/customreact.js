function customRender(reactElement, mainContainer) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target);

    // mainContainer.appendChild(domElement);




    // set attribute is repeated so we use for of loop to remove problem
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const keys in reactElement.props) {
        console.log(keys); // href, target
        console.log(reactElement.props[keys]); // google.com, _blank
        domElement.setAttribute(keys, reactElement.props[keys])
    }
    mainContainer.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {href: 'https://google.com', target: '_blank'},
    children: 'Click on this Link!'
}



const mainContainer = document.getElementById('root');



customRender(reactElement, mainContainer)