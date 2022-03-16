//MUST HAVE - CREATE A TEMPLATE TAG
var template_bannerresult = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bannerresult.innerHTML = `

<style>
    #banner_image {
        margin: 100px auto;
        width: 80%;
        position: absolute;
        top:10px;
        left:100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #banner_image img {
        width: 100%;
    }

    #text {
        width:650px;
        font-size: 50px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        position: relative;
        top: -80px;
        text-align: center;
        color: black;
    }

</style>


<div id='banner_image'>
        <img id='banner' src='/img/Banner_outcome.png'/>
        <div id='text'>Overfishing - Outcome</div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBannerresult extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_bannerresult.content.cloneNode(true)); //use the template to make a clone

    if(this.getAttribute("img")){
        this.shadowRoot.querySelector("#banner_image > img").src = this.getAttribute("img");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-bannerresult", TheBannerresult)