import React, { Component } from "react";
import Students from "../assets/Students.png";
import './homeStyle.css'

export default class Home extends Component {
  render() {
    return (
        <section className="body-home">
            <div className="img-students">
              <img src={Students}/>  
            </div>
        </section>
    );
  }
}