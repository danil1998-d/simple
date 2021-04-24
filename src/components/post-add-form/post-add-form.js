import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <form 
                className="post-add-form"
                onSubmit={this.onSubmit}
                >
                <input
                className="add__form"
                type="text"
                placeholder="Добавьте новую запись"
                onChange={this.onValueChange}
                value={this.state.text}
                />
                <button
                type="submit"
                className="add__btn"
                >
                Добавить
                </button>
            </form>
        )
    }
}