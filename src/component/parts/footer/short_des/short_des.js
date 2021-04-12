import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import './short_des.css';

class ShortDesc extends React.Component{
  render(){
    return(
      <Card className="cardcontact">
        <Card.Body>
          <Card.Title>רייף מסעדה טאבון ובית קפה</Card.Title>
          <Card.Text>
            <p><i class="fa fa-map-marker"></i> אבא חושי,עספיא</p>
            <p id="place" class="mx-auto w-50">להזמנת מקום:</p>
            <p><i class="fa fa-phone"></i> 04-887-4322</p>
            <p><i class="fa fa-envelope"></i> tabon.reef@gmail.com</p>
            <p><i class="fa fa-clock"></i> שעות פעילות</p>
            <p>10:00-22:00</p>
            <p className="social-icons justify-content-center">
                <a href="https://www.facebook.com/reef.restaurantcafe"><i class="fa fa-facebook"></i></a>
                <a href="https://instagram.com/tabon.reef?igshid=1av30pblrrh7i"><i class="fa fa-instagram mt-3 px-2"></i></a>
                <a href="mailto:tabon.reef@gmail.com"><i class="fa fa-envelope-o mt-3 px-2"></i></a>
                <a href="https://waze.com/ul/hsvbfjcgp1"><i class="fa fa-map-marker mt-3 px-2"></i></a>
                <img className="img-hever" src={"../../../../images/hever.jpg"} alt="" />
            </p>

          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default ShortDesc;
