import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function DataFetching(){
    let {userId} = useParams();
    const initialUserArray = [];
    const [user, setUser] = useState(initialUserArray);

    useEffect(() => {
            axios.get(`https://fc5y-fe.s3.us-east-2.amazonaws.com/users.json/1`)
            .then(res => {
                console.log(res);
                setUser(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[]);
    return(
        <div>
            <ul>
                {user.map(user => <li key={user.id}>{user.id}.{user.email}</li>)}
            </ul>
        </div>
    )
}

export default DataFetching;