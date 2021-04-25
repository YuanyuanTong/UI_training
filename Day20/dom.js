// 1. createElement()
// 2. appendChild()
// 6. insertBefore
function myFunc1() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("> This is a newly created text node.");
    newDiv.appendChild(newContent);
    const innerDiv = document.getElementById("inner");
    document.getElementById("outer").insertBefore(newDiv, innerDiv);
}
// createElement can also be used to create web component...

// 3. textContent
function myFunc2() {
    const innerDiv = document.getElementById("inner");
    innerDiv.textContent = "> This is the inner div (modified by changing textContent).";
}

// 4. innerHTML
// Exceptions
// 1) SyntaxError
// An attempt was made to set the value of innerHTML using a string which is not properly-formed HTML.
// 2) NoModificationAllowedError
// An attempt was made to insert the HTML into a node whose parent is a Document.
// HTML5 specifies that a <script> tag inserted with innerHTML should not execute

// Note: If a <div>, <span>, or <noembed> node has a child text node that includes the characters (&), (<), or (>), 
// innerHTML returns these characters as the HTML entities "&amp;", "&lt;" and "&gt;" respectively. 
// Use Node.textContent to get a raw copy of these text nodes' contents.
function myFunc3() {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "<div> &gt This is a new div created through innerHTML.</div>"
    const outerDiv = document.getElementById("outer");
    outerDiv.appendChild(newDiv);
}

// 5. innerHTML VS createElement
// You have to type in <tag> inside innerHTML. And sometimes it is dangerous.

// 7. append
// 8. prepend
// The Element.append() method inserts a set of Node objects or DOMString objects after the last child of the Element.
// DOMString objects are inserted as equivalent Text nodes.
// Differences from Node.appendChild():
// 1) Element.append() allows you to also append DOMString objects, whereas Node.appendChild() only accepts Node objects.
// 2) Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// 3) Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.
function myFunc4() {
    const outerDiv = document.getElementById("outer");
    let br = document.createElement("br");
    outerDiv.append("> append");
    outerDiv.prepend("> prepend", br);
}


// 9. replaceChild
// 10. removeChild
function myFunc5() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("> This is a the inner div (modified by replaceChild).");
    newDiv.appendChild(newContent);
    newDiv.id = "inner";
    let oldDiv = document.getElementById("inner");
    const outerDiv = document.getElementById("outer");
    outer.replaceChild(newDiv, oldDiv);
    let toRemove = document.getElementById("to-remove");
    if(toRemove !== null) {
        outer.removeChild(toRemove);
    }
    
}
// 11. cloneNode
// Cloning a node copies all of its attributes and their values, including intrinsic (inline) listeners. It does not copy event listeners added using addEventListener() or those assigned to element properties (e.g., node.onclick = someFunction). Additionally, for a <canvas> element, the painted image is not copied.
// Warning: cloneNode() may lead to duplicate element IDs in a document!
// If the original node has an id attribute, and the clone will be placed in the same document, then you should modify the clone's ID to be unique.
// Name attributes may need to be modified also, depending on whether duplicate names are expected.
// This behavior has been changed in the latest spec! Although deep it still optional, it now defaults to false.
function myFunc6() {
    const innerDiv = document.getElementById("inner");
    const outerDiv = document.getElementById("outer");
    let clonedNode = innerDiv.cloneNode(true);
    clonedNode.id = "inner-cloned";
    newContent = document.createTextNode(" (cloned)");
    clonedNode.appendChild(newContent);
    outer.append(clonedNode);
}

// 12. getAttribute
// 13. setAttribute
// 14. removeAttribute
// 15. hasAttribute
// 16. style property
// 17. classList property
// 18. elements width and height
function myFunc7() {
    const innerDiv = document.getElementById("inner");
    const outerDiv = document.getElementById("outer");
    console.log("Before setting inner class: hasAttribute(\"class\") " + innerDiv.hasAttribute("class"));
    console.log(innerDiv.getAttribute("class"));
    innerDiv.setAttribute("class","test");
    console.log("After setting inner class: hasAttribute(\"class\") " + innerDiv.hasAttribute("class"));
    console.log(innerDiv.getAttribute("class"));
    outerDiv.removeAttribute("style");
    innerDiv.classList.add("a");
    console.log(innerDiv.classList);
    // let style = getComputedStyle(innerDiv);
    // let width = style.width;
    console.log(innerDiv.offsetWidth, innerDiv.clientWidth);
    innerDiv.style.width = "300px";
    console.log(innerDiv.offsetWidth, innerDiv.clientWidth);
}

// 19. events- 
// 1) page events
// 2) js events 
// all the buttons in the html are linked with JS events
// 3) mouse + keyboard events

// 4) scroll events
// let lastKnownScrollPosition = 0;

// document.addEventListener('scroll', function (e) {
//     console.log(lastKnownScrollPosition);
//     lastKnownScrollPosition = window.scrollY;    
// });
