import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Switch,Route} from 'react-router-dom'
import ListUser from './ListUser'
import UserDetail from './UserDetail'


const Users  = ({match}) => {
    const [users,setUsers] = useState([]);
    const [isLoading,setLoading] = useState(true);
    
    useEffect(() => {
        axios.get(`https://fc5y-fe.s3.us-east-2.amazonaws.com/users.json`)
        .then(res => {
            console.log(res);
            setUsers(res.data)
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);
    return (
    <Switch>
        <Route path ={`${match.url}/:id`} render={(props) => isLoading ?<h1>Loading</h1>:<UserDetail {...props} users={users} /> }/>
        <Route path ={`${match.url}`} users={users} component={ListUser}/>
    </Switch>
    )
} 
    

export default Users;