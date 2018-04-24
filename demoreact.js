function render(element, node){
    mount(element, node);
}

function mount(element, node){
    const component = instantiateComponent(element);
    const renderedNode = component.mountComponent();

    DOM.empty(node);
    DOM.appendChildren(node, renderedNode);
}


function creatrElement(type, config, children) {
    const props = Object.assign({},config);
    const childrenLength = [].slice.call(arguments).length - 2;//arguments对象的数组提出来转化为数组
    if(childrenLength > 1){
        props.children = [].slice.call(arguments,2);
    }else if (childrenLength === 1){
        props.children = children;
    }
    return {
        type,
        props
    }
}

function instantiateComponent(element){
    let componentInstance;
    if(typeof element.type === 'function'){
        componentInstance = new element.type(element.props);
        componentInstance._construct(element);
    }else if (typeof element === 'string' || typeof element === 'number'){
        componentInstance = new DOMComponent({
            type:'span',
            props:{children:element}
        });
    }
    return componentInstance;
}

function mountComponent(component) {
    return component.mountComponent();
}

