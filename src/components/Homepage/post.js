import React from 'react'

import Input from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';
import Button  from '@material-ui/core/Button';


export default function post() {
    return (
        <div className= "rightgrid" >
             <div className = "posttab">
                 <div className = "inputprofile">
                    <div className= "profile"></div>
                    <div className = "postinputdiv"><Input className= "postinput" placeholder = "What is happening ?"></Input></div>
                 </div>
                 <div className = "addpost">
                   <div className = "adddfile"></div>
                   <div className = "post"><Button variant="contained" color="primary" >post</Button></div>
                 </div>
      
             </div>
              <div className = "suggesttab">
                  <div className = "suggestedlayout">
                    <h3>Sugessted</h3>
                    <div className = "sugestedprofile">
                      <div className= "profile"></div>
                     <div className = "profilename"><p className = "profilep"><b>Elon musk</b></p></div> 
                     <div className = "follow"><Button variant="contained" color="primary"  size="small" >Follow</Button></div>
                    </div>

                   <div className = "sugestedprofile">
                      <div className= "profile"></div>
                     <div className = "profilename"><p className = "profilep" ><b>Elon musk</b></p></div> 
                     <div className = "follow"><Button variant="contained" color="primary" size="small" >Follow</Button></div>
                    </div>

                   <div className = "sugestedprofile">
                    <div className= "profile"></div>
                     <div className = "profilename"><p className = "profilep" ><b>Elon musk</b></p></div> 
                     <div className = "follow"><Button variant="contained" color="primary" size="small" >Follow</Button></div>
                    </div>


                    <div className = "sugestedprofile">
                    <div className= "profile"></div>
                     <div className = "profilename"><p className = "profilep" ><b>Elon musk</b></p></div> 
                     <div className = "follow"><Button variant="contained" color="primary" size="small" >Follow</Button></div>
                    </div>

                    <div className = "sugestedprofile">
                      <div className= "profile"></div>
                     <div className = "profilename"><p className = "profilep" ><b>Elon musk</b></p></div> 
                     <div className = "follow"><Button variant="contained" color="primary" size="small" >Follow</Button></div>
                    </div>
                <a href = "#"><Link>See more</Link> </a>

                  </div>
                  
                 
              </div>
        </div>
    )
}