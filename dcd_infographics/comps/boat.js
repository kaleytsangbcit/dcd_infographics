//MUST HAVE - CREATE A TEMPLATE TAG
var template_boat = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_boat.innerHTML = `

<style>
    #boat_image {
        top:650px;
        left: 200px;
        height: 800px;
        position: relative;
    }

</style>


<div id='boat_image'>
        <img id='boat' src='/img/FishingBoat.png'/>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBoat extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_boat.content.cloneNode(true)); //use the template to make a clone

    if(this.getAttribute("img")){
        this.shadowRoot.querySelector("#boat_image > img").src = this.getAttribute("img");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-boat", TheBoat)