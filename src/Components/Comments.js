import { useEffect, useState } from "react";
import Comment from "./Comment";
import { useContext } from "react";
import { Context } from "./Context";
import { Link, Navigate } from "react-router-dom";


function Comments({comment,reply}){
    let [photo, setPhoto] = useState()
    let [deyer, setDeyer] = useState()
    let [id, setId] = useState()
    let {user} = useContext(Context)
    let [access, setAccess] = useState()
    let [area,setArea] = useState()
    let {getuser} = useContext(Context)
    let {refresh,setRefresh} = useContext(Context)


    let sender = {'username':Number(id),'comment1':area}
    let token = access
    function write(e){
        setArea(e.target.value)
    }

    useEffect(()=>{
        for(let i of getuser){
            console.log(i)
            if(i['username']==user){
                console.log(i['username'])
                setId(i['id'])
                setPhoto(i['image'])
                
            }
        }
    })
    
    

    useEffect(() => {
        let verify = {'refresh':refresh}
        fetch('http://127.0.0.1:8000/account/token/refresh/',{
            method:'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(verify)
        }).then(response => response.json()).then(data => {
            setAccess(data['access'])
            console.log(data,'burda aacessss+++++++++++++')
        })

    }, [])
    console.log(typeof(access),'ssssssssssssssss')
    async function onSubmit(e){
        e.preventDefault()
        let response= await fetch('http://127.0.0.1:8000/homeapi/comment/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer '+token
            },
            body:JSON.stringify(sender)
        })
        return(
            <Navigate to='/'/>
        )
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
                                        <img src={photo} alt="" />
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

