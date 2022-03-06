//MUST HAVE - CREATE A TEMPLATE TAG
var template_waves = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_waves.innerHTML = `

<style>
    #waves_image {
        top:1080px;
        position: absolute;
        transform: none;
        animation: waves 10s linear infinite;
        animation-direction: infinite;
      }

      @keyframes waves {
        0%   {left: -100px;}
        50%  {left: 0px;}
        100% {left: -100px;}
    }

    #waves_image img {
        width: 100%;
    }


</style>


<div id='waves_image'>
        <img id='wave' src='/img/Waves.png'/>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheWaves extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_waves.content.cloneNode(true)); //use the template to make a clone

    if(this.getAttribute("img")){
        this.shadowRoot.querySelector("#waves_image > img").src = this.getAttribute("img");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-waves", TheWaves)