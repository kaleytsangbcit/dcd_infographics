//MUST HAVE - CREATE A TEMPLATE TAG
var template_desinfo = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_desinfo.innerHTML = `
<style>
    .desnumber{
        font-family: 'Fredoka', sans-serif;
        font-style: normal;
        text-align: center;
        position: absolute;
        top: 1000px;
    }

        
    }
    #desc {
        font-size: 40px;
        text-decoration: none;
        width: 500px;
        opacity: 100%;
    }

</style>
<div class="desnumber">
    <div id="desc" style="color: #FFFFFF">Global fish biomass will be decline by the end of this century</div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheDesinfo extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_desinfo.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("desc"))
        {
            this.shadowRoot.querySelector("#desc").innerHTML = this.getAttribute("desc");
        }
       
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    scrollFunction() {
        if (document.querySelector("#wrapper").scrollTop > 60) {
          this.shadowRoot.querySelector("#desc").style.opacity = "0%";
        } else {
          this.shadowRoot.querySelector("#desc").style.opacity = "100%";
        }
       }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-desinfo", TheDesinfo)