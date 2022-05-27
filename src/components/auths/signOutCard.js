import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { logoutVisitor } from '../../store/visitorSlice';
import date from 'date-and-time';
import { logVisitor } from '../../functions/functions';

const SignOutCard = ({username, loginTime, loginMethod}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    let visitorsInfo = useSelector(state => state.visitors.visitorList);
    let visitorId = visitorsInfo.findIndex(visitor => visitor.email === username);

    console.log("Visitor-----",visitorId, visitorsInfo)

    let now = new Date();
    let time = date.format(now, "HH:mm:ss");

    const handleClick = () => {
            dispatch(logoutVisitor({email: username, time: time}));
            console.log(visitorId);

            // if(visitorId !== -1){
            //     const {dateCurrent, email, isLoggedIn, loginMethod, timeIn, timeOut} = visitorsInfo[visitorId];
            //     console.log(dateCurrent, email, isLoggedIn, loginMethod, timeIn, timeOut);

            //     logVisitor(email, dateCurrent, timeIn, timeOut, loginMethod);

            // }
            document.querySelector("#signoutEmail").value = "";

        swal.fire({
            icon: 'success',
            title: `${username} logged out`,
            text: 'Have a great day, nice having you here',
            confirmButtonText: 'Thanks'
          })
        setTimeout(() => {
            navigate("/loginSignup")
        }, 3000)
    }

  return (
    <div className='m-3'>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Click to sign out
        </Typography>
        <Typography variant="h5" component="div">
          {username}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Logged in via {loginMethod}
        </Typography>
        <Typography variant="body2">
          Login time:
          <br />
          {loginTime}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Sign Out</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default SignOutCard