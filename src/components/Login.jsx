import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };

      

    return (

        <Fragment>

           <h1>Login</h1>
              
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <div class="col-md-3">

                    <label  class="form-label">Email</label>
                    <input 
                    name="email"
                    placeholder="Ingresar Email"
                    type="email" 
                    className="form-control my-2" 
                    {...register("Email", {
                        required: true,
                        type:"email"
                      })}
                    />
                     {errors?.Email?.type === "required" && <p>El Correo es obligatorio</p>}

                </div>

                <div class="col-md-3">

                    <label  class="form-label">Contraseña</label>
                    <input 
                    name="contraseña"
                    className="form-control my-2"
                    placeholder="Ingresar Constraseña"
                    type="password" 
                    {...register("Contraseña", {
                        required: true,
                        type:"password",
                       
                        
                      })}
                    />
                     {errors?.Contraseña?.type === "required" && <p>La Contraseñas es obligatoria</p>}

                <button type="submit" class="btn btn-primary">Iniciar sesion</button>
                

                </div>
            </form>

        </Fragment>
    
        
        
    )
}
