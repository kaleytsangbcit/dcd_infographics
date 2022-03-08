//MUST HAVE - CREATE A TEMPLATE TAG
var template_chart = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_chart.innerHTML = `

<style>
    #chart_image {
        margin: 100px auto;
        width: 80%;
    }

    #chart_image img {
        width: 300px;
    }

    #chartText {
        width:240px;
        font-size: 28px;
        position: relative;
        top: -220px;
        left: 36px;
        text-align: center;
        color: white;
    }

    #chartText span {
        color:#FFC5C5;
    }

</style>


<div id='chart_image'>
        <img id='chart' src='/img/piechart_25.png'/>
        <div id='chartText'>text</div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheChart extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_chart.content.cloneNode(true)); //use the template to make a clone

    if(this.getAttribute("img")){
        this.shadowRoot.querySelector("#chart_image > img").src = this.getAttribute("img");
        }
    if(this.getAttribute("text")){
        this.shadowRoot.querySelector("#chart_image > #chartText").innerHTML = this.getAttribute("text");
    }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-piechart", TheChart)