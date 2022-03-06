//MUST HAVE - CREATE A TEMPLATE TAG
var template_swipedown = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_swipedown.innerHTML = `

<style>


    #swipedown1{
        right: 30px;
        position: absolute;
        top:1200px;
    }

    #swipedown2{
        right: 30px;
        position: absolute;
        top:3000px;
    }

    #swipedown3{
        right: 30px;
        position: absolute;
        top:4500px;
    }

</style>


<div id='swipedown_image'>
        <img id='swipedown1' src='/img/Swipedown.png'/>
        <img id='swipedown2' src='/img/Swipedown.png'/>
        <img id='swipedown3' src='/img/Swipedown.png'/>

</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSwipeDown extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_swipedown.content.cloneNode(true)); //use the template to make a clone

    if(this.getAttribute("img")){
        this.shadowRoot.querySelector("#swipedown_image > img").src = this.getAttribute("img");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-swipedown", TheSwipeDown)