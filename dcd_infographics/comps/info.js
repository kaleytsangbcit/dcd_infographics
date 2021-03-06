//MUST HAVE - CREATE A TEMPLATE TAG
var template_info = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_info.innerHTML = `
<style>
    .number{
        font-family: 'Fredoka', sans-serif;
        font-style: normal;
        text-align: center;
        position: absolute;
        top: 1000px;
    }
    #head {
        font-size: 62px;
        text-decoration: none;
        
    }
    #desc {
        font-size: 40px;
        text-decoration: none;
        width: 500px;
    }

</style>
<div class="number">
    <div id="head" style="color: #FFFFFF">3-25%</div>
    <div id="desc" style="color: #FFFFFF">Global fish biomass will be decline by the end of this century</div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheInfo extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_info.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("desc-text"))
        {
            this.shadowRoot.querySelector("#desc").innerHTML = this.getAttribute("desc-text");
        }
        if(this.getAttribute("head-text"))
        {
            this.shadowRoot.querySelector("#head").innerHTML = this.getAttribute("head-text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-info", TheInfo)