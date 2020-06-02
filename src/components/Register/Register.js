import React from 'react';
import { Link } from "react-router-dom";
import { auth } from './../../services/firebase.service';
import './Register.scss';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			error: null
		}
  	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

  	handleSubmit = (event) => {
		event.preventDefault();
		auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
			const user = auth().currentUser;
			user.updateProfile({displayName: this.state.username});
			this.props.history.push('/chat');
		}).catch(error => {
			error = {
				message: 'Error al crear el usuario, por favor revisa los campos'
			}
			this.setState({ error });
		});
	}

  	render = () => {
		return(
			<div className="container-auth">
				<div className="container-auth__form">
					<h1>Crear Cuenta</h1>
					{this.state.error && <p className="error-message">{this.state.error.message}</p>}
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="username">Nombre de Usuario</label>
						<input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} />
						<label htmlFor="email">Correo eléctronico</label>
						<input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
						<label htmlFor="password">Contraseña</label>
						<input
							type="password"
							name="password"
							id="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<button className="general-submit" children="Registrarse" />
						<p>Ya tienes una cuenta? <Link className="login-btn" to="/login">Iniciar Sesión</Link></p>
					</form>
				</div>
			</div>
		);
  	}
}

export default Register;
