//MUST HAVE - CREATE A TEMPLATE TAG
var template_scrollbottom = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_scrollbottom.innerHTML = `
<style>

</style>
<div></div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ScrollBottom extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
        
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_scrollbottom.content.cloneNode(true)); //use the template to make a clone
        
        //assign variables!
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    scrollToBottom(){
        window.scrollTo(0, document.body.scrollHeight);
        }
        history.scrollRestoration = "manual";
        window.onload = scrollToBottom();
}

//MUST HAVE - define the tag for the custom elements
customElements.define("scroll-bottom", ScrollBottom)