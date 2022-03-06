//MUST HAVE - CREATE A TEMPLATE TAG
var template_swipeup = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_swipeup.innerHTML = `

<style>


    #swipeup1{
        right: 30px;
        position: absolute;
        top:2200px;
    }

    #swipeup2{
        right: 30px;
        position: absolute;
        top:4000px;
    }

    #swipeup3{
        right: 30px;
        position: absolute;
        top:6000px;
    }

</style>


<div id='swipeup_image'>
        <img id='swipeup1' src='/img/Swipeup.png'/>
        <img id='swipeup2' src='/img/Swipeup.png'/>
        <img id='swipeup3' src='/img/Swipeup.png'/>

</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSwipeUp extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_swipeup.content.cloneNode(true)); //use the template to make a clone

    if(this.getAttribute("img")){
        this.shadowRoot.querySelector("#swipeup_image > img").src = this.getAttribute("img");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-swipeup", TheSwipeUp)