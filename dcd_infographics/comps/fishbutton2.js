//MUST HAVE - CREATE A TEMPLATE TAG
var template_fishbutton2 = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_fishbutton2.innerHTML = `

<style>

    #fishbutton {
        position: absolute;
        top:5000px;
        left:20px;
        display:block;
        height:300px;
        width:350px;
    }

    #fishicon {
        position:absolute;
        top: 220px;
        right:10px;
    }

    #bubble {
        position:absolute;
        top:4px;
        right:10px;
        opacity:70%;
    }
    
    #fishbutton > p {
        font-family: 'Open Sans', sans-serif;
        font-size:36px;
        width:350px;
        font-weight: 400;
        position:absolute;
        top:-14px;
        right:-36px;
    }

</style>


<div id='fishbutton'>
        <a href="/index.html">
        <img id='fishicon' alt="click to see Overfishing Process" src="img/tapfish2.png" ></a>
        <img id='bubble' src='/img/Bubble.png'/>
        <p>Tap me to see the Process of Overfishing</p>

</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFishButton2 extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_fishbutton2.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("img")){
            this.shadowRoot.querySelector("#fishbutton > img").src = this.getAttribute("img");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-fishbutton2", TheFishButton2)