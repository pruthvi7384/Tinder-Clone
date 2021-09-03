import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';

function Header({backbutton}) {
    const history = useHistory();
    return (
        <div className="header">
            {backbutton ? (<IconButton onClick={()=>history.replace(backbutton)}>
                                <ArrowBackIosIcon fontSize="large"/>
                           </IconButton>
                ) : (   <IconButton>
                            <PersonIcon fontSize="large" />
                        </IconButton>)
            }
            <Link to="/" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wVaZa0m9lVu5dzowiUBb1SFxngTTrBAwgNJz0YGqmZ6V2tq3HnM-Qq1tBjqA78soFb4&usqp=CAU" alt="tinder logo"/>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
