import { useState ,useEffect} from "react";


function Reply({value3,value4}){
    console.log(value3,'repliesss')
    let [deyer, setDeyer] = useState(value3.number2)
    let [re,setRe] = useState(false)
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
            <div className="zz">
                <div className="ee">
                    <div className="commentreply">
                        <div>
                            <div>
                                <button onClick={plus}>+</button>
                                <span>{deyer}</span>
                                <button onClick={minus}>-</button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={value3.username.image} alt="" />
                                <p>{value3.username.username}</p>
                                <p>{value3.startdate}</p>
                                <i className="fa fa-reply" onClick={reply}><span>Reply</span></i>
                            </div>
                            <div>
                                {value3.reply}
                            </div>
                        </div>
                    </div>
                </div>
                <div >                                   
                    <div>
                    {re==false?null:
                        <div className="send2">            
                            <div>
                                <div>
                                    <img src={require('../ls.webp')} alt="" />
                                </div>
                                <div>
                                    <textarea />
                                </div>
                                <div>
                                    <button>Reply</button>
                                </div>
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reply