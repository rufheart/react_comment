import { useState } from "react";
import Comment from "./Comment";
import { useContext } from "react";
import { Context } from "./Context";
import userEvent from "@testing-library/user-event";

function Comments({comment,reply}){
    let {photo} = useContext(Context)
    let [deyer, setDeyer] = useState()



    console.log(photo,'photosssss')    
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
                                        <img src={'http://127.0.0.1:8000'+photo} alt="" />
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