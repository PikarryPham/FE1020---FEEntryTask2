import React from 'react';
import './index.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneIcon from '@material-ui/icons/Phone';
import InsertLinkIcon from '@material-ui/icons/InsertLink';


const UserDetail  = (props) => {
    // console.log(props) // users: [10 pt], id: match.params.id
    // console.log(props.users);
    console.log(`Param la ${parseInt(props.match.params.id)}`);
    const userFound = props.users.find(({id}) => id === parseInt(props.match.params.id) ); //tim thong tin object co id trung khop voi id trong /users/:userId
    console.log(userFound.email);
    return (
        <div className="contact__item">
            <h2 className="contact__item__name">{userFound.name}</h2>
            <p className="contact__item__username">{userFound.username}</p>
            <p className="contact__item__companyname">{userFound.company.name}</p>
            <p className="contact__item__email"><MailOutlineIcon></MailOutlineIcon><span style={{margin: '0 0 0 1.5rem'}}>{userFound.email}</span></p>
            <p className="contact__item__address"><ContactMailIcon></ContactMailIcon><span style={{margin: '0 0 0 1.5rem'}}>{`${userFound.address.street}, ${userFound.address.suite}, ${userFound.address.city}, ${userFound.address.zipcode}`}</span></p>
            <p className="contact__item__phone"><PhoneIcon></PhoneIcon><span style={{margin: '0 0 0 1.5rem'}}>{userFound.phone}</span></p>
            <p className="contact__item__website"><InsertLinkIcon></InsertLinkIcon><span style={{margin: '0 0 0 1.5rem'}}>{userFound.website}</span></p>
        </div>
    )

} 

export default UserDetail;