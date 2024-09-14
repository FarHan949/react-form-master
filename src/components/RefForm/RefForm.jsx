import { useEffect, useRef } from "react";


const RefForm = () => {
 const nameRef = useRef(null)
 const  emailRef = useRef(null)
 const  passwordRef = useRef(null)


 useEffect(()=>{
    nameRef.current.focus()   
 },[])

 const handelSubmit = e =>{
    e.preventDefault()
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
 }

    return (
        <div>
           <form onSubmit={handelSubmit}>
                <div>
                <input  ref={nameRef}
                 className="m-5 p-5p-3 bg-slate-400 "  type="text" name="name" />
                <br />

                <input ref={emailRef}
                className="m-5 p-5p-3 bg-slate-400 "  type="email" name="Email" />
                <br />
                <input ref={passwordRef}
                 className="m-5 p-5p-3 bg-slate-400 " type="password" name="password"/>
                 
                 <br />
                <input className="m-5 p-5 " type="submit" value="Submit"/>
                </div>
                
            </form>
        </div>
    );
};

export default RefForm;