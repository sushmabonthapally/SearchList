import React,{Component} from 'react';
import './searchInput.css';
import { withRouter } from 'react-router-dom'
// import List from './listComponent'

class SearchInput extends Component{
    constructor(){
        super();
        this.state = {
            userName : '',
            textError: null,
            loading : null
        }
    }

    nameHandler =(event)=>{
        this.setState({userName : event.target.value})
    }

    checkNameHandler=()=>{
        const arr = this.props.props;
        console.log(arr);
        let i=0;
        for(i;i<=arr.length-1;i++){
            if(arr[i].name === this.state.userName)
            {
            this.setState({loading:<p style = {{marginTop:'10px'}}><b>Fetching Results...</b></p>})
            setTimeout(()=>{
            this.props.history.push('/new',{getValue : arr[i]})
            },2000)
            break;
            }
        }
        if(this.state.userName === '')
            this.setState({textError:<p style = {{marginTop:'10px'}}><b>Enter the Text</b></p>})
        else if(i>arr.length-1)
            this.setState({textError:<p style={{marginTop:'10px'}}><b>'Sorry No Matches found'</b></p>})
        else
            this.setState({textError:<p className="removeText"/>})
     } 
    render(){
        return (        
            <div style = {{marginTop: "10%"}}>
            <h2 style = {{marginTop :'1%'}}>Search List</h2>
            <div className = "search">
            <input type = "text" placeholder = "enter name..." value={this.state.userName} onChange = {(event)=>this.nameHandler(event)}/>
            <button onClick ={this.checkNameHandler} className = "btn">Search</button>
            {this.state.loading}
            {this.state.textError}
            </div>
            </div>
        )
    }
}

export default withRouter(SearchInput)
