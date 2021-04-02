import React from 'react';

export class Reg extends React.Component{
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
    }

    sendForm(event){
        event.preventDefault();
        console.log("отправка");

    }
    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        })
    }
    render() {
        return <div className="col-md-5 my-5 mx-auto">
            <h1 className="text-center my-3">Регистрация</h1>
            <form onSubmit={this.sendForm}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Имя"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Фамилия" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Пароль"/>
                </div>
                <div className="mb-3">
                    <input type="submit" className="form-control btn btn-primary" value="Отправить"/>
                </div>
            </form>
        </div>
    }
}