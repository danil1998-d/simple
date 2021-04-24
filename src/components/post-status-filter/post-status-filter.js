import React, {Component} from 'react';

import './post-status-filter.css';


export default class PostStatusFilter extends Component {
     constructor(props) {
		super(props);
		this.buttons = [
			{name: 'all', label: 'Все'},
			{name: 'important', label: 'В процессе'},
			{name: 'like', label: 'Готовы'}
        ];
     }
    render() {

		    const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
			const active = filter === name;
			const clazz = active ? 'active__btn' : 'btn'
			return (
				<button type='button'
				 	    className={`btn ${clazz}`}
					    key={name}
					    onClick={() => onFilterSelect(name)}
						>{label}</button>
			)
		});

        return (
            <div className="btns">
                {buttons}
            </div>
        )
    }
}