//MUST HAVE - CREATE A TEMPLATE TAG
var template_body = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_boat.innerHTML = `

<style>

</style>


<div id='background_image'>
        <img id='body' src='/img/background_clean.png'/>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBody extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_body.content.cloneNode(true)); //use the template to make a clone

    if(this.getAttribute("img")){
        this.shadowRoot.querySelector("#background_image > img").src = this.getAttribute("img");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    $(window).ready(function(){
        $('html,body').animate({ scrollTop: 7000 }, 0);  
        $('html,body').animate({ scrollTop: 0 }, 2000); 
    });
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-body", TheBody)