//MUST HAVE - CREATE A TEMPLATE TAG
var template_destruct = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_destruct.innerHTML = `

<style>
    #destruct_image {
        margin: 100px auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 100%;
    }

    #destruct_image img {
        width: 200px;
        justify-content:center;
    }

    #text {
        width:300px;
        font-size: 38px;
        position: relative;
        top: 20px;
        text-align: center;
        color: white;
    }

    #desc {
        width:300px;
        font-size: 24px;
        position: relative;
        top: 20px;
        text-align: center;
        color: white;
        display: flex;
        
    }


</style>


<div id='destruct_image'>
        <img id='destruct_ex' src='/img/cyanide_drawing.png'/>
        <div id='text'>text</div>
        <div id='desc'>text 2</div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheDestruct extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_destruct.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("img")){
            this.shadowRoot.querySelector("#destruct_image > img").src = this.getAttribute("img");
        }
        if(this.getAttribute("text")){
            this.shadowRoot.querySelector("#destruct_image > #text").innerHTML = this.getAttribute("text");
        }
        if(this.getAttribute("desc")){
            this.shadowRoot.querySelector("#destruct_image > #desc").innerHTML = this.getAttribute("desc");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeOpacity(){
        this.shadowRoot.querySelector("#destruct_image").style.opacity =`
        opacity 100%;
        `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-destruct", TheDestruct)