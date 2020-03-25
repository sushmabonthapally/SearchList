import React,{Component} from 'react';
import './searchInput.css';
import { withRouter } from 'react-router-dom'
// import List from './listComponent'

class SearchInput extends Component{
    constructor(props){
        super(props);
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
        let i;
        for(i=0;i<=arr.length-1;i++){
            if(arr[i].name === this.state.userName)
            {
            this.setState({loading:<p style = {{marginTop:'20px'}}><b>Fetching Results</b></p>})
            setTimeout(()=>{
            this.props.history.push('/new',{getValue : arr[i]})
            },1000)
            break;
            }
        }
        if(i>arr.length-1)
            this.setState({textError:<p style = {{marginTop:'20px'}}><b>‘Sorry No Matches found’.</b></p>})
     } 
    render(){
        return (        
            <div style = {{marginTop: "10%"}}>
            <h2 style = {{marginTop :'1%'}}>Search List</h2>
            <div className = "search">
            <input type = "text" placeholder = "enter name..." value={this.state.userName} onChange = {(event)=>this.nameHandler(event)}/>
            {this.state.loading}
            {this.state.textError}
            <button onClick ={this.checkNameHandler} className = "btn">Search</button>
            </div>
            </div>
        )
    }
}

export default withRouter(SearchInput)
