//MUST HAVE - CREATE A TEMPLATE TAG
var template_banner = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_banner.innerHTML = `

<style>
    #banner_image {
        top: 300px;
        display:flex;
        justify-content: center;
        position: absolute;
    }

    #banner_image img {
        width: 80%;
    }

</style>


<div id='banner_image'>
        <img id='banner' src='/img/Banner_process.png'/>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBanner extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_banner.content.cloneNode(true)); //use the template to make a clone

    if(this.getAttribute("img")){
        this.shadowRoot.querySelector("#banner > img").src = this.getAttribute("img");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-banner", TheBanner)