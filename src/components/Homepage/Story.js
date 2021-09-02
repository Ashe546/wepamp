import React from 'react'

import BottomNav from "../../Layout/Bottomnav"




export default function Story() {
    return (   
           <>   
             <div className = "centergrid" >
                 <div className = "storyfeed">
                     <div className = "storyprofilelayout">
                       <div className= "feedprofile"></div>
                       <div className = "feedotherprofile">
                          <div className = "profilename">
                            <p className = "feedp">
                                <b>Elon musk</b>
                                <br/>@ashe213  
                            </p>      
                          </div> 
                         <div className = "feeddescription">
                              <p>Hello my name is ashenafi and this is my first poast ask me any thing you want in the comment section below Hello my name is ashenafi and this is my first poast ask me any thing you want in the comment section below
                                  Hello my name is ashenafi and this is my first poast ask me any thing you want in the comment section below
                              </p>
                         </div>
                         <div className = "photovideofeed">
                             <img className = "imgvideo" src = "/1.png"></img>
                         </div>
                        </div>
                     </div>


                     <div className = "storyprofilelayout">
                       <div className= "feedprofile"></div>
                       <div className = "feedotherprofile">
                          <div className = "profilename">
                            <p className = "feedp">
                                <b>Elon musk</b>
                                <br/>@ashe213  
                            </p>      
                          </div> 
                         <div className = "feeddescription">
                              <p>Hello my name is ashenafi and this is my first poast ask me any thing you want in the comment section below Hello my name is ashenafi and this is my first poast ask me any thing you want in the comment section below
                                  Hello my name is ashenafi and this is my first poast ask me any thing you want in the comment section below
                              </p>
                         </div>
                         <div className = "photovideofeed">
                             <video className = "imgvideo"  controls>
  <source src="/Movie.mp4" type="video/mp4"/>
  <source src="/Movie.ogg" type="video/ogg" />
Your browser does not support the video tag.
                            </video>
                         </div>
                        </div>
                     </div>

                 </div>

             </div>
             </>
    )
}
