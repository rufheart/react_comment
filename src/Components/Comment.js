import { useState ,useEffect} from "react";
import Reply from "./Reply";

function Comment({value1,value2,id}){
    console.log(value1.id,'value1')
    console.log(value2,'value2')
    let [uid, setuid] = useState(value1.id)
    let [fa,setFa] = useState('fa')
    // console.log(uid,'uid+++')
    // console.log(value2,'value222222')
    let [deyer, setDeyer] = useState(value1.number)
    let [fl,setFl] = useState(false)
    let [re,setRe] = useState(false)
    let [tl,setTl] = useState(false)
    let [cavab,setCavab]=useState([])
    let count=0
    let count1=0
    function plus(){
        let pl = deyer+1
        setDeyer(pl)
    }
    function minus(){
        let mn = deyer-1
        if(mn<0){
            mn=0
        }
        setDeyer(mn)
    }
    function show(){
        if(fl==false){
            setFl(true)
        }
        else{
            setFl(false)
        }
    }
    function show2(){
        if(tl==false){
            setTl(true)
            setFa('fa1')
        }
        else{
            setTl(false)
        }
    }
    function reply(){
        if(re==false){
            setRe(true)
            
        }
        else{
            setRe(false)
        }
    }

    return(
        <div>
            <div className="comment">
                <div>
                    <div>
                        <div>
                            <button onClick={plus}>+</button>
                            <span>{deyer}</span>
                            <button onClick={minus}>-</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={value1.username.image} alt="" />
                            <p>{value1.username.username}</p>
                            <p>{value1.startdate}</p>
                            <i className="fa fa-reply" onClick={show}><span>Reply</span></i>
                        </div>
                        <div>
                            {value1.comment1}
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div>
                        {value2.map((value,index)=>{
                            // console.log(value,'maaaaaaaaaaaaaaaaaaaaaaaaa    
                            if(value.comment2==value1.id){
                                count+=1
                            
                            }   
                        })}
                        {count!=0?<i id={fa}  onClick={show2}><i id="bildiris1" className="fa fa-reply fa-rotate-180" ></i><i id="bildiris">{count} {count==1?'Reply':'Replies'}</i></i>:null}
                    </div>
                </div>
            </div>
            {tl==false?null: 
            <div className="div">
                {/* <div>
                    <div></div>
                </div> */}
                <div className="uc">
                    <div className="uc1">

                    </div>
                {value2.map((value,index)=>(
                    <div className="uc1">

                        {value.comment2 == uid ?<Reply value3={value}/>:null}

                    </div>
                ))}
                </div>
            </div>
            }

            {fl==false?null:
                <div className="reply">
                    <div>
                        <div>
                            <img src={require('../ls.webp')} alt="" />
                        </div>
                        <div>
                            <textarea/> 
                        </div>
                        <div>
                            <button>Reply</button>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Comment