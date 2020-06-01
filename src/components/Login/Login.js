import React from 'react';
import { Link } from "react-router-dom";
import { auth } from './../../services/firebase.service';
import './Login.scss';

class Login extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		}
  }
  
  handleChange  = (event) => {
		this.setState({[event.target.name]: event.target.value});
  }
  
  handleSubmit  = (event) => {
		event.preventDefault();
		auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
			this.props.history.push('/chat');
		}).catch(error => {
			error = {
				message: 'Usuario o contraseña incorrectos'
			}
			this.setState({ error });
		});
	}
    
  render = () => {
		return(
			<div className="container-auth">
				<div className="container-auth__form">
					<h1>Iniciar Sesión</h1>
					{this.state.error && <p className="error-message">{this.state.error.message}</p>}
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="email">Correo eléctronico</label>
						<input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
						<label htmlFor="password">Contraseña</label>
						<input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
						<button className="general-submit" children="Iniciar Sesión" />
						<p>No tienes una cuenta? <Link className="login-btn" to="/register">Crear Cuenta</Link></p>
					</form>
				</div>
			</div>
		);
  }
}

export default Login;
