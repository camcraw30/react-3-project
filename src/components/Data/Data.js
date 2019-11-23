import React, {Component} from 'react';
import './Data.css';

export default class Data extends Component {
    render() {
        return (
            <div className='employee'>
                <p className='id'>{this.props.employees[this.props.index].id + "/25"}</p>
                <h1 className='name'>{this.props.employees[this.props.index].name.first + ' ' + this.props.employees[this.props.index].name.last}</h1>
                <div className="info">
                    <p>{'From:' + ' ' + this.props.employees[this.props.index].city + ', ' + this.props.employees[this.props.index].country}</p>
                    <p>{'Job Title:' + ' ' + this.props.employees[this.props.index].title}</p>
                    <p>{'Employer:' + ' ' + this.props.employees[this.props.index].employer}</p>
                </div>
                <p className="movies">{'Favorite Movies:'}
                    <p>{'1.  ' + ' ' + this.props.employees[this.props.index].favoriteMovies[0]}</p>
                    <p>{'2.  ' + ' ' + this.props.employees[this.props.index].favoriteMovies[1]}</p>
                    <p>{'3.  ' + ' ' + this.props.employees[this.props.index].favoriteMovies[2]}</p>
                </p>
            </div>
        )
    }
}