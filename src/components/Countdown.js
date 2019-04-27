import React, { Component } from 'react';

class Countdown extends Component{
    render(){
        var message = this.setCountdown("Feb 15, 2020 15:37:25");
        return (
            <div className = "countdown">
                <h3 id = "countdownText"> COUNTDOWN TO HACKCWRU 2020: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                          {message}</h3>
            </div>
        )
    }
    
    // function to set the countdown time
    setCountdown(HackDate) {
        // Set the date count down to
        var countDownDate = new Date(HackDate).getTime();
        // Update the countdown every second
            // Get current time
            var currentTime = new Date().getTime();

            var distance = countDownDate - currentTime;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var result = days + " : " + hours + " : " + minutes + " : " + seconds;
            console.log(result);
            return result; 
    }

   
    
}



export default Countdown;