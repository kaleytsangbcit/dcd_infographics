//MUST HAVE - CREATE A TEMPLATE TAG
var template_swipeup = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_swipeup.innerHTML = `

<style>


    #swipeup1{
        right: -40px;
        position: fixed;
        transform: scale(0.7);
        display:none;
    }


</style>


<div id='swipeup_image'>
        <img id='swipeup1' src='/img/Swipeup.png'/>


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

    
        // document.querySelector("#wrapper").onscroll = () => this.scrollFunction();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

// When the user scrolls down 30px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

scrollFunction() {
  if (document.querySelector("#wrapper").scrollTop > 60) {
    this.shadowRoot.querySelector("#swipeup1").style.display = "block";
  } else {
    this.shadowRoot.querySelector("#swipeup1").style.display = "none";
  }
 }
}


//MUST HAVE - define the tag for the custom elements
customElements.define("the-swipeup", TheSwipeUp)