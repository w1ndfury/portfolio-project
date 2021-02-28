import React from "react";
import './Experience.css';



function Work (props){
    
    function ToolsList(tools) {
        const ToolsItems = tools.map((i) =>
          <li>{i}</li>
        );
        return (
            <ul style={{ color: "red", 'font-size': 16 }} id="menu">
                {ToolsItems}
            </ul>
        );
    }

    return(
    <div class="work">
        <div className="inside-0">    
            <p>
                <strong>{props.title}</strong>
            </p>
            <p style={{'font-size': 18 }}>
                {props.info}
            </p>
            <div className="my-link">
                <a href={props.link} target="_blank">Code</a>
            </div>
        </div>
        <div className="inside-1">                                   
            <p><strong>Tools & Frameworks</strong> </p>
            {ToolsList(props.tools)}                                     
        </div>                                  
    </div>
    );
}

export default Work;

