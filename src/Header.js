import React from "react";
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from "@material-ui/icons/Forum"
function Header()
{
    return(
       <div className="header">
        <IconButton color="primary">
        <PersonIcon fontSize="large" className="header_icon"/>
        </IconButton>
       <img className="header__logo" src="/tinder.svg" alt="" />
       <IconButton>
       <ForumIcon fontSize="large" className="header__icon"/>
       </IconButton>
       </div> 
     
    )
}
export default Header