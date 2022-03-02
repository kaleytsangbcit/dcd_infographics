//MUST HAVE - CREATE A TEMPLATE TAG
var template_clouds = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_clouds.innerHTML = `

<style>
    #clouds_image_1 {
        top:350px;
        left: 30px;
        position: absolute;
    }

    #clouds_image_2 {
        top:450px;
        left: 500px;
        position: absolute;
    }
    
    #clouds_image_1 img, 
    #clouds_image_2 img {
        width: 75%;
    }

</style>


<div id='clouds_image_1'>
        <img id='clouds_1' src='/img/Cloud.png'/>
</div>

<div id='clouds_image_2'>
        <img id='clouds_2' src='/img/Cloud_2.png'/>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheClouds extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_clouds.content.cloneNode(true)); //use the template to make a clone

    if(this.getAttribute("img")){
        this.shadowRoot.querySelector("#clouds_image_1 > img").src = this.getAttribute("img");

        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-clouds", TheClouds)