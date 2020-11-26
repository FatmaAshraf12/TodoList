import React from 'react'

class AddItem extends React.Component{
    state={
        name:'',
        email:''
    }

    handleChange=(e)=>{
        let state = {...this.state};

        state[e.target.id]=e.target.value;

        this.setState(state)

    }

    handleSubmit = (e) =>{
        e.preventDefault();

        let state = {...this.state};

        this.props.addItem(state);

        this.setState({
            name:'',
            email:''
        });
    }
    render(){
        return(
            <div className="container z">
            <form className="row" onSubmit={this.handleSubmit}>
                <input className="col-md-5"type="text" placeholder="Enter name.." id="name" onChange={this.handleChange} value={this.state.name}/>
                <input className="col-md-5" type="email" placeholder="Enter email.." id="email" onChange={this.handleChange} value={this.state.email}/>
                <input className="col-md-2"type="submit" value="add" />
            </form>
            </div>

        )
    }
}

export default AddItem;