import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import firebase from '../Config/Firebase'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';

export const Registro = () => {

    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
       // alert(JSON.stringify(data.Email));
       console.log(data.Email)

       firebase.auth.createUserWithEmailAndPassword(data.Email, data.Contraseña)
       .then(res=>{

          //enviar correo
          res.user.sendEmailVerification();

          //Usuario dado de alta.
         console.log("Auth res", res)
          firebase.db.collection('users').add({
             Correo: data.Email,
             //Grabar todo lo que quieras
          })
          .then(resp=>{
             /// que hacer despues de grabar
             console.log("Firebase res", resp)
           })
           history.push("/Login")


           ///SweerAlert de registro exitoso
           Swal.fire(
            'Felicidades!!!',
            'Te has registrado',
            'success'
          )
          .catch(e=>{
            ///Errores de grabado en la bd Firestore
             console.log('error: ', e)
           })
       }).catch(e=>{
         ///Manejo de errores de Registro de Autenticacion
          console.log('error: ', e)
       })
       
      };

    return (

        <Fragment>

           <h1>Registro</h1>
              
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <div className="col-md-3">

                    <label  className="form-label">Email</label>
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

                <div className="col-md-3">

                    <label  className="form-label">Contraseña</label>
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

                <button  type="submit" className="btn btn-primary"><a href="/Home"></a>Registrar</button>
                

                </div>
            </form>

        </Fragment>
    
        
        
    )
}
