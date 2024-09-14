

const Form = () => {

const handelSumbit = (e) =>{
    e.preventDefault();
  console.log(e.target.name.value)
  console.log(e.target.Email.value)
  console.log(e.target.phone.value)
}

    return (
        <div>
            <form onSubmit={handelSumbit}>
                <div>
                <input className="m-5 p-5p-3 bg-slate-400 "  type="text" name="name" />
                <br />

                <input className="m-5 p-5p-3 bg-slate-400 "  type="email" name="Email" />
                <br />
                <input className="m-5 p-5p-3 bg-slate-400 " type="phone" name="phone"/>

                <input className="m-5 p-5 " type="submit" value="Submit"/>
                </div>
                
            </form>
        </div>
    );
};

export default Form;