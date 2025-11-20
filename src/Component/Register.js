import { useState } from "react";

function Register () {

    const [err,setErr] = useState({});

    const [formdata, setFormdata] = useState({
        name : '',
        email : '',
        password : '',
        dob : '',
        phone : '',
        address:'',
        country:'',
        sub:false
    })

    const validatePhone = (phone) => {
        const regex = /^[0-9]{10}$/;
        return regex.test(phone);
    };

    const onsubmitHandler = (event) => {
        event.preventDefault();
        setErr({});
        if(formdata.name === ''  || formdata.name === null ){
            setErr({
                errName : 'Name cannot be blank'
            })
        }
        else if(formdata.email === '' || formdata.email === null){
            setErr({
                errName1 : 'Email should not be blank'
            })
        }
        else if(formdata.password.length < 3 || formdata.password.length > 9){
            setErr({
                errName2 : 'Password length should be in range 3 to 9'
            })
        }
        else if(!validatePhone(formdata.phone)){
            setErr({
                errName3 : 'Phone number should be 10 digits & Every Character should be digit'
            })
        }
        else if(formdata.checked === false){                //needs to be checked
            setErr({
                errName4 : 'You should subscribe before submit'
            })
        }
        else{
            console.log(formdata);
        }
    }

    const onchangeHandler = (event) => {
        setFormdata({
            ...formdata,
            [event.target.name]: event.target.type === 'checkbox'? event.target.checked : event.target.value
        })
    }

    return (
        <>
        <h1>Multiple Input Form</h1>
        <br/><br/>

            <form onSubmit={onsubmitHandler}>

                <input type="text"
                name="name"
                value={formdata.name}
                onChange={onchangeHandler}
                /><br/>
                {err.errName && <span style={{color:'red'}}>{err.errName}</span>}
                <br/>

                <input type="email"
                name="email"
                value={formdata.email}
                onChange={onchangeHandler}
                /><br/>
                {err.errName1 && <span style={{color:'red'}}>{err.errName1}</span>}
                <br/>

                <input type="password"
                name="password"
                value={formdata.password}
                onChange={onchangeHandler}
                /><br/>
                {err.errName2 && <span style={{color:'red'}}>{err.errName2}</span>}
                <br/>

                <input type="date"
                name="dob"
                value={formdata.dob}
                onChange={onchangeHandler}
                /><br/><br/>

                <input type="tel"
                name="phone"
                value={formdata.phone}
                onChange={onchangeHandler}
                /><br/>
                {err.errName3 && <span style={{color:'red'}}>{err.errName3}</span>}
                <br/>
                
                <textarea
                name="address"
                value={formdata.address}
                onChange={onchangeHandler}
                >
                </textarea><br/><br/>

                <select
                name="country"
                value={formdata.country}
                onChange={onchangeHandler}
                >
                    <option value='INDIA'>INDIA</option>
                    <option value='UK'>UK</option>
                    <option value='USA'>USA</option>
                    <option value='JAPAN'>JAPAN</option>
                </select><br/><br/>

                <input type="checkbox"
                name="sub"
                checked={formdata.sub}
                onChange={onchangeHandler}
                />Subscribe<br/>
                {err.errName4 && <span style={{color:'red'}}>{err.errName4}</span>}
                <br/>

                <button>Submit</button>

            </form>

            <h4>{JSON.stringify(formdata)}</h4>
        </>
    )
}

export default Register;