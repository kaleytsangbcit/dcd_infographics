//MUST HAVE - CREATE A TEMPLATE TAG
var template_bodydirty = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bodydirty.innerHTML = `

<style>
#bg{
    position:absolute;
    width:100%;
    top:0;
    left:0;
}
</style>

<img id = "bg" src='/img/background_dirty.png'/>

`;


//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBodyDirty extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_bodydirty.content.cloneNode(true)); //use the template to make a clone

   
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-bodydirty", TheBodyDirty)