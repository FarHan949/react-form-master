import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState(null);
    const  [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')



    const handelSubmit =  (event) => {
        event.preventDefault();
        if(password.length  < 8){
            setError('Password must be 8 character or longer')
        }   else{
            setError('')
            
        console.log(email);
        console.log(password)
        console.log(name)
        }

    }


    const handelNameChange =  (event) => { 
     setName(event.target.value);
    }


    const handelEmailChange  = (event) => {
            // console.log(event.target.value)
            setEmail(event.target.value)
    }

    const handelPasswordChange = event => {
        setPassword(event.target.value)
    }


    return (
        <div>
            
         <form onSubmit={handelSubmit}>
                <div>
                <input onChange={handelNameChange}
                 className="m-3 p-3 bg-slate-400 rounded-xl"  type="text" name="name" />
                <br />

                <input onChange={handelEmailChange}
                 className="m-3 p-3 bg-slate-400 rounded-xl"  type="email" name="Email" />
                <br />

                <input onChange={handelPasswordChange}
                 className="m-3 p-3 bg-slate-400 rounded-xl" type="password" name="password" required/>
                <br />

                <input className="m-5 p-5 " type="submit" value="Submit"/>
                </div>

                {
                    error  && <p className="text-red-500">{error}</p>

                }
                
            </form>

        </div>
    );
};

export default StatefulForm;