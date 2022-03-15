//MUST HAVE - CREATE A TEMPLATE TAG
var template_groupfish = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_groupfish.innerHTML = `

<style>
    #groupfish {
        margin: 100px auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #groupfish img {
        width: 400px;
        justify-content:center;
    }

    #text {
        width:500px;
        font-size: 36px;
        position: relative;
        top: 20px;
        text-align: center;
        color: white;
    }

    #groupfish span {
        color:#FFC5C5;
    }

    #groupfish p {
        font-size: 48px;
        margin:0px;
    }

</style>


<div id='groupfish'>
        <img src='/img/FishGroup.png'/>
        <div id='text'>text</div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheGroupFish extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_groupfish.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("img")){
            this.shadowRoot.querySelector("#groupfish > img").src = this.getAttribute("img");
        }
        if(this.getAttribute("text")){
            this.shadowRoot.querySelector("#groupfish > #text").innerHTML = this.getAttribute("text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-groupfish", TheGroupFish)