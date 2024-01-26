import "../../css/PropsComponent.css"
function PropsComponent(props){
    /* internal const StyleAttr={
        background-color:black;
        color:aqua;
    }*/
    return(
        //<div style:{StyleAttr}></div>-->internal
        //<div style:{{color:"white"}}></div> -->inline
        <div>
           <h1>Hello, {props.name} <br></br> This is {props.course} class</h1>
        </div>
    )

}
export default PropsComponent;