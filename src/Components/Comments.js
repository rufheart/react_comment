import { useState } from "react";
import Comment from "./Comment";

function Comments({comment,reply}){
    
    let [deyer, setDeyer] = useState()
    // console.log(reply,'Comentssssssssssssssssssssssssssssssssssssssssssssssssssss')
    // for(let i of reply[0]){
    //     console.log(i,'iiiiiiiiiii')
    // }
    return(
        <div>
            <div className="comments">
                {comment[0].map((value,index)=>{

                    return(
                        <div>
                            {console.log(value.comments1,'dgdgdhhdjdkdkddkejdrkr==')}
                            <Comment value1={value} value2={value.comments1} key={index} id={value.id} />
                           
                        </div>
                    )
                })}

            </div>
            <div>
                {comment.map((value,index)=>{
                    return(
                        <div>
                           <div className="send">
                               <div>
                                    <div>
                                        <img src={require('../ls.webp')} alt="" />
                                    </div>
                                    <div>
                                        <textarea/> 
                                    </div>
                                    <div>
                                        <button>Send</button>
                                    </div>
                                </div>    
                           </div>                           
                        </div>
                    )
                })}
            </div>
        </div>    
    )
}

export default Comments