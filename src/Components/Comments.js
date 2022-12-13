import { useState } from "react";
import Comment from "./Comment";
import { useContext } from "react";
import { Context } from "./Context";
import userEvent from "@testing-library/user-event";

function Comments({comment,reply}){
    let {photo} = useContext(Context)
    let [deyer, setDeyer] = useState()
    let {id} = useContext(Context)
    let {access} = useContext(Context)
    let [area,setArea] = useState()

    console.log(access,'acesssss')

    let sender = {'username':Number(id),'comment1':area,access}
    let token = localStorage.getItem('access')
    function write(e){
        setArea(e.target.value)
    }
    async function onSubmit(e){
        e.preventDefault()
        let response= await fetch('http://127.0.0.1:8000/homeapi/comment/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer'+token
            },
            body:JSON.stringify(sender)
        })
    }

    console.log(area,'photosssss')    
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
                                <form action="" onsubmit={onSubmit}>
                                    <div>
                                        <img src={'http://127.0.0.1:8000'+photo} alt="" />
                                    </div>
                                    <div>
                                        <textarea onChange={write} value={area}/> 
                                    </div>
                                    <div>
                                        <input type="submit" onClick={onSubmit}/>
                                    </div>
                                </form>
                           </div>                           
                        </div>
                    )
                })}
            </div>
        </div>    
    )
}

export default Comments


{/* <div>

</div> */}