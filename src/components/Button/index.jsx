import './styles.css';

import { Component } from "react/cjs/react.production.min";

export class Button extends Component {
    render() {
        const { text, onClick, disabled } = this.props;
        return (
            <button 
            onClick={onClick} 
            className='button'
            disabled={disabled}
            >
                {text}
            </button>
        );
    }
}