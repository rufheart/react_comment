import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

let Context = createContext();

function Provider({children}){

  
    let comments = [
        {
            id:1,
            username:'@rufat',
            image: 'avatar-angela-gray.webp',
            startdate:'1 month',
            number:12,
            comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

        },
        {
            id:2,
            username:'@tenda',
            image: 'avatar-angela-gray.webp',
            startdate:'10 day',
            number:6,
            comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id:2,
            username:'@tenda',
            image: 'avatar-angela-gray.webp',
            startdate:'10 day',
            number:6,
            comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
    ]
    // let reply = [
    //     {
    //         id:2,
    //         username:'nano',
    //         replyid:2,
    //         startdate:'15 day ago',
    //         number:12,
    //         comment:'Woow this is amazing'
    //     },
    //     {
    //         id:1,
    //         username:'nova',
    //         replyid:1,
    //         startdate:'12 day ago',
    //         number:15,
    //         comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    //     },
    //     {
    //         id:3,
    //         username:'tenda',
    //         replyid:2,
    //         startdate:'8 day ago',
    //         number:7,
    //         comment:'Woow this is amazing '
    //     }
    // ]


    useEffect(()=>{
        fetch('http://127.0.0.1:8000/homeapi/comment/').then(response => response.json()).then(data => {
                setData(data);

                for(let i of data){

                    setData1(i.comments1)
                    // setData1([...data1, i.comments1])
                }
            });

    }, [])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/account/getusers/').then(response => response.json()).then(data => {
            setGetuser(data)
        })
    },[])

    let [data, setData] = useState([])
    let [data1, setData1] = useState([])
    let [getuser, setGetuser] = useState([])   /* fetch 2 uchun */



    let [user,setUser] = useState(localStorage.username)
    let [photo,setPhoto] = useState(localStorage.photo)
    let [id, setId] = useState()
    let [access, setAccess] = useState(localStorage.access)
    let [refresh, setRefresh] = useState(localStorage.refresh)
    console.log(user,'context')

    return(
        <Context.Provider  value={{data: [data] , data1: [data1],user,setUser,photo,setPhoto,id,setId,access,setAccess,getuser,refresh,setRefresh}}>
            {children}
        </Context.Provider>
    )
}
export {Context}
export default Provider

