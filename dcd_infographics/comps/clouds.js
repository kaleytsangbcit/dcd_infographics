//MUST HAVE - CREATE A TEMPLATE TAG
var template_clouds = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_clouds.innerHTML = `

<style>


    #clouds_image_1 {
        position: absolute;
        transform: none;
        animation: leftMoving 4s linear infinite;
        animation-direction: alternate;
      }

      @keyframes leftMoving {
        0%   {left: 10px; top: 280px;}
        50%  {left: 180px; top: 280px;}
        100% {left: 10px; top: 280px;}
    }

    #clouds_image_2 {
        position: absolute;
        transform: none;
        animation: rightMoving 5s linear infinite;
        animation-direction: alternate;
      }

      @keyframes rightMoving {
        0%   {right: 10px; top: 500px;}
        50%  {right: 250px; top: 500px;}
        100% {right: 10px; top: 500px;}
    }
    
    #clouds_image_1 img, 
    #clouds_image_2 img {
        width: 100%;
    }

</style>


<div id='clouds_image_1'>
  <img id='clouds_1' src='/img/Cloud_01.png'/>
</div>

<div id='clouds_image_2'>
  <img id='clouds_2' src='/img/Cloud_02.png'/>
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
        this.shadowRoot.querySelector("#clouds_image_1 > img").src = this.getAttribute("img1");
        this.shadowRoot.querySelector("#clouds_image_2 > img").src = this.getAttribute("img2");
      }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-clouds", TheClouds)