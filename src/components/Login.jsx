import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import firebase from '../Config/Firebase'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';


export default function Login() {

    const history = useHistory();


    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        
        firebase.auth
        .signInWithEmailAndPassword(data.Email, data.Contraseña)
        .then((resp) => {
          ///ingreso
          if (resp.user.emailVerified) {
            history.push("/Post")
            //comprobar Mail
            //SweerAlert de registro exitoso
            Swal.fire(
                'Felicidades',
                'Has ingresado satifactoriamente',
                'success'
              )
            console.log("email verificado")
          }else{
            ///no esta verificado
            ///SweerAlert de registro exitoso
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usted debe verificar su cuenta en su Correo'
              })
          }
          
        })
        .catch((e) => {
         ///Manejar errores
          try {
          switch (e.code) {
          case "auth/wrong-password":
            
            break;
          case "auth/user-not-found":
            
            break;
          case "auth/invalid-email":
           
            break;
          case "too-many-requests":
            
            break;
          
          default:
           
        }
         } catch (e) {
          
         }
        });
      };

      

    return (

        <Fragment>

           <h1>Login</h1>
              
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
                       
                        
                      })}
                    />
                     {errors?.Contraseña?.type === "required" && <p>La Contraseñas es obligatoria</p>}

                <button type="submit" className="btn btn-primary">Iniciar sesion</button>
                

                </div>
            </form>

        </Fragment>
    
        
        
    )
}
