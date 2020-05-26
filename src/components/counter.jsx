import React, { Component } from 'react';
class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ['tag1','tag2','tag3']
    }
    // styles = {
    //     fontSize: 10,
    //     fontWeight: 'bold'
    // }
    handleIncrement = product => {
        console.log(product);
        this.setState({ value: this.state.value + 1 });
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
    }
    
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                {/* { this.state.tags.length === 0 && "Please create a new tag!" }
                { this.renderTags() } */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({id: 1}) } className="btn btn-primary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.state;
        return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;