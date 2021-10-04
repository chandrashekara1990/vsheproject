import React ,{Component} from "react";
import axios from "axios";


class Sent extends Component{

    constructor(props){
        super(props);
        this.state = {
           name : ' ',
           job : ''
        }
    }

    onHandleInput = (event) => {
       this.setState({
           [event.target.name] : event.target.value
       })
    }

    onSubmit(){
       const url="https://reqres.in/api/users"

       axios.post(url,this.state)
       .then((response) =>{
           console.log(response.data)
           alert('User profile created Successfully');
       })
       .catch((error) =>{
           console.log(error)
       })
    }

    render(){
        return(
            <div>
                <h1>This is a Sent page</h1>
                <div className="bottom-space">
                    <label className="lable-Text">Enter Your Name : </label>
                    <input type="text" placeholder="Please enter a name...."  
                    className="input-space" onChange={this.onHandleInput} name="name" />
                </div>
                <div className="bottom-space">
                    <label className="lable-Text">Enter Your Job Desc : </label>
                    <input type="text" placeholder="Please enter a job desc.."
                     className="input-space" onChange={this.onHandleInput}  name="job"/>
                </div>
                <button onClick={() =>this.onSubmit()}>Submit</button>
            </div>
        )
    }
}

export default Sent;