import React, { Component } from 'react';

class list extends Component 
{
    constructor(props){
        super(props);
        this.state = {}
    }
      render(){
          const finalRes = this.props.location.state.getValue;
          return(
           <div>
               <h4>Details of {finalRes.name}</h4>
               <div style ={{marginTop:'50px'}}>
                <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">gender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{finalRes._id}</td>
                    <td>{finalRes.name}</td>
                    <td>{finalRes.gender}</td>
                    </tr>
                </tbody>
               </table>
               </div>
              </div>
              )
            }
        }

export default list