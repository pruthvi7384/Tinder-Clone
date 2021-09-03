import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

function CardButtons() {
    return (
        <div className="card-buttons">
            <IconButton>
                <ReplayIcon className="replay-btn" fontSize="large"/>
            </IconButton>
            <IconButton>
                <CloseIcon className="close-btn" fontSize="large"/>
            </IconButton>
            <IconButton>
                <StarRateIcon className="star-btn" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon className="favirate-btn" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon className="flash-btn" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default CardButtons
