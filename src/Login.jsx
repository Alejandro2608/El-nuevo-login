import React from 'react';



class Login extends React.Component {
    constructor(args) {
        super(args);
        this.state = {  
            username: '',
            
            password: '',
           
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    save(e){
        this.setState({
            message: 'Guardado correctamente'
        })
    }


register(e){
    
}


    render() { 
        return ( 
        <div>
                <h1>Inicio de Sesión</h1>
            
           <form >
                <label htmlFor="username">Nombre de usuario</label><br/>
                <input value={this.state.username} onChange={this.onChange.bind(this)} 
                name="username" id="username" type="text"/> <br/><br/>

                <label htmlFor="password">Contraseña</label><br/>
                <input value={this.state.password} onChange={this.onChange.bind(this)}
                name="password" id="password" type="password"/> <br/> <br/>

            </form>

            <div>
                <button onClick={this.save.bind(this)}> <a href="https://biologicplastic.netlify.com/">
                    Aceptar
                    </a></button>
                <span style={{color: 'green'}}>{this.state.message}</span>

                <p style={{color: 'green'}}>No tienes Cuenta?</p>

        <button onClick={this.register.bind(this)}> <a href="https://biologic-plastic.netlify.com">
            Regístrate
            </a></button>

            
            </div>
        </div>



         );
    }
}
 
export default Login;