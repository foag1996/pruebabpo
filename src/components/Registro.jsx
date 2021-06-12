import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

export const Registro = () => {

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

           <h1>Registro</h1>
              
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
                        minLength:"6"
                        
                      })}
                    />
                     {errors?.Contraseña?.type === "required" && <p>La Contraseñas es obligatoria</p>}
                     {errors?.Contraseña?.type === "minLength" && (
                        <p>La contraseña debe tener como minimo 6 caracteres</p>
                     )}

                <button type="submit" class="btn btn-primary">Registrar</button>
                

                </div>
            </form>

        </Fragment>
    
        
        
    )
}
