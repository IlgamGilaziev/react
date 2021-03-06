import React from 'react';
import {Redirect} from "react-router-dom";

export class Reg extends React.Component{
    constructor() {
        super();
        this.handleInputChange = this.handleInput.bind(this);
        this.sendForm = this.handleSubmit.bind(this);
        this.state = {
            name:"",
            lastname:"",
            email:"",
            pass:"",
            redirect: false
        }
    }

        handleInput(e){
            const name = e.target.name;
            const value = e.target.value;
            this.setState({
                [name]:value
            })
        }

        handleSubmit(e){
            e.preventDefault();
            const formData = new FormData();
            formData.append("name",this.state.name);
            formData.append("lastname",this.state.lastname);
            formData.append("email",this.state.email);
            formData.append("pass",this.state.pass);
            fetch("http://ilgamgsy.beget.tech/php/handlerReg.php",{
                method: "POST",
                body: formData
            })
                .then(response=>response.json())
                .then(result=>{
                    if(result.result === "exist"){
                        this.setState({
                            info: "Такая почта существует!"
                        })
                    }else{
                        this.setState({
                            redirect: true
                        })
                    }
                });
        }
    render() {
        if(this.state.redirect)
            return <Redirect to="/" />
        else
        return <div className="col-md-5 my-5 mx-auto">
            <h1 className="text-center my-3">Регистрация</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <input value={this.state.name} onChange={this.handleInput} name="name" type="text" className="form-control" placeholder="Имя"/>
                </div>
                <div className="mb-3">
                    <input value={this.state.lastname} onChange={this.handleInput} name="lastname" type="text" className="form-control" placeholder="Фамилия" />
                </div>
                <div className="mb-3">
                    <input value={this.state.email} onChange={this.handleInput} name="email" type="email" className="form-control" placeholder="Email"/>
                    <p style={{color:"red"}}>{this.state.info}</p>
                </div>
                <div className="mb-3">
                    <input value={this.state.pass} onChange={this.handleInput} name="pass" type="password" className="form-control" placeholder="Пароль"/>
                </div>
                <div className="mb-3">
                    <input type="submit" className="form-control btn btn-primary" value="Отправить"/>
                </div>
            </form>
        </div>
    }
}