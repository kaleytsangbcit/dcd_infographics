//MUST HAVE - CREATE A TEMPLATE TAG
var template_destruct = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_destruct.innerHTML = `

<style>
    #destruct_image {
        margin: 100px auto;
        width: 80%;
    }

    #destruct_image img {
        width: 150px;
    }

</style>


<div id='destruct_image'>
        <img id='destruct_ex' src='/img/cyanide_drawing.png'/>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheDestruct extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_destruct.content.cloneNode(true)); //use the template to make a clone

    if(this.getAttribute("img")){
        this.shadowRoot.querySelector("#destruct_image > img").src = this.getAttribute("img");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-destruct", TheDestruct)