import { useForm } from "react-hook-form";

function About () {
    const {register, handleSubmit,formState:{errors}} = useForm();

    const myonSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(myonSubmit)}>
                <input
                    {...register('firstname',{required:"Cannot be blank",maxLength:{
                        value : 10,
                        message : "Should be less than 10"
                    },
                    minLength:{
                        value : 3,
                        message : "Should be greater than 3"
                    }
                })}
                />
                    {errors.firstname && <span style={{color:'red'}}>{errors.firstname.message}</span>}
                <br/><br/>
                <input
                    {...register('lastname',{required:"Cannot be blank"})}
                />
                    {errors.lastname && <span style={{color:'red'}}>{errors.lastname.message}</span>}
                <br/><br/>
                <input type="email"
                    {...register('email')}
                /><br/><br/>
                <input type="password"
                    {...register('password',{required:"Cannot be blank",
                        pattern:{
                            value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                            message:"Must contain at least 8 characters, including upper/lowercase, number, and special character"
                        }
                    })}
                />
                    {errors.password && <span style={{color:'green'}}>{errors.password.message}</span>}
                <br/><br/>
                <input type="number"
                    {...register('age', {required:"Cannot be blank", 
                        min:{
                            value:18,
                            message:"Minimum age is 18"
                        },
                        max:{
                            value:65,
                            message:"Maximum age is 65"
                        }
                    })}
                />
                    {errors.age && <span style={{color:'red'}}>{errors.age.message}</span>}
                <br/><br/>
                <textarea
                    {...register('address')}
                />
                <select
                    {...register('country')}
                >
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                </select>
                <input type="checkbox"
                    {...register('subscribe')}
                /><br/><br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default About;