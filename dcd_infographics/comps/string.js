//MUST HAVE - CREATE A TEMPLATE TAG
var template_string = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_string.innerHTML = `

<style> 

    #string_image {
        position: absolute; 
        top: 5000px;
        left: 350px;
        animation: Movingup 10s linear 1 forwards;
        animation-direction: alternate;
        transform: scaleY(5);
      }

      @keyframes Movingup {
        0%   {top: 500px;}
        100% {top: 1000px;
                transform-origin: top; 
                transform: scaleY(0.2)}
    }



</style>

    <div id='string_image'>
            <img id='string' src='/img/String.png'/>
    </div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheString extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_string.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("img")){
            this.shadowRoot.querySelector("#string_image > img").src = this.getAttribute("img");
        }
    

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    
        }
    }


//MUST HAVE - define the tag for the custom elements
customElements.define("the-string", TheString)