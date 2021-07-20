import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';

const Rating = ({value, text}) => {
    return (
        <div>
            <span style={{ color: "yellow" }}>
            {
                value >= 1 ? <StarIcon/> : value >= 0.5 ? <StarHalfIcon/> : <StarBorderIcon/> 
            }
            </span>
            <span style={{ color: "yellow" }}>
            {
                value >= 2 ? <StarIcon/> : value >= 1.5 ? <StarHalfIcon/> : <StarBorderIcon/> 
            }
            </span>
            <span style={{ color: "yellow" }}>
            {
                value >= 3 ? <StarIcon /> : value >= 2.5 ? <StarHalfIcon/> : <StarBorderIcon/> 
            }
            </span>
            <span style={{ color: "yellow" }}>
            {
                value >= 4 ? <StarIcon/> : value >= 3.5 ? <StarHalfIcon/> : <StarBorderIcon/> 
            }
            </span>
            <span style={{ color: "yellow" }}>
            {
                value >= 5 ? <StarIcon/> : value >= 4.5 ? <StarHalfIcon/> : <StarBorderIcon/> 
            }
            </span>
        </div>
    )
}

export default Rating
