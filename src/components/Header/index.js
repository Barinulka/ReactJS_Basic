import { List, ListItem, Link, Toolbar } from "@material-ui/core";
import React from "react";
import { Link as RoutesLink } from "react-router-dom";
import './style.scss';



export const Header = () => {

    return(
       <Toolbar variant="dense" className="header">
            <p className="header-title">Learn ReactJS</p>
            <List>
                <ListItem>
                    <Link component={RoutesLink} to="/" underline="hover" >Главная</Link>
                </ListItem>
                <ListItem>
                    <Link component={RoutesLink} to="/profile" underline="hover" >Профиль</Link>
                </ListItem>
                <ListItem>
                    <Link component={RoutesLink} to="/chats" underline="hover" >Сообщения</Link>
                </ListItem>
            </List>
       </Toolbar>
       
       
       
        // <header className="header center">
            
        // </header>
    )
}