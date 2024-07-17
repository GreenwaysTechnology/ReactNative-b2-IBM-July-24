//dom element creation using plain js.

function createElement() {
    const Heading = document.createElement('h1')
    Heading.innerHTML = 'Hello React!'
    const rootElement= document.getElementById('root')
    //attach Heading with RootElement called div
    rootElement.appendChild(Heading)

}
createElement()