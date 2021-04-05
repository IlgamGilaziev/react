import React from "react";




export class Post extends React.Component{
    constructor(props) { //вызывается первым
        super(props);
        this.state = {
            title: '',
            text: '',
            author: '',
            date_added: ''
        }
    }
    componentDidMount() { //вызывается третьим
        const formData = new FormData();
        formData.append("id",this.props.match.params.id);
        fetch("http://ilgamgsy.beget.tech/php/getPost.php",{
            method: 'POST',
            body: formData
        })
            .then(response=>response.json())
            .then(result=>{
                this.setState({
                    title: result.title,
                    text: result.text,
                    author: result.author,
                    date_added: result.date_added
                })
            })
    }


    render() { //  //вызывается вторым
        return <>
            <h1>{this.state.title}</h1>
            <p>{this.state.text}</p>
            <h6>{this.state.author}</h6>
            <h6>{this.state.date_added}</h6>
        </>
    }
}