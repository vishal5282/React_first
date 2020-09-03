import React, { Component } from 'react';

import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component
{

    constructor()
    {
        super();
        this.state =
        {
            name:" Welcome to Avatar World"
        }
    }

    namechange()
    {
        this.setState
        ({
            name:"Subscribe to vishal technical chanel"
        })
    }
    render()
    {
    
     const avatarlistarray = 
        [
         {
            id:1,
            name:"Vishal",
            work:"Web devloper"
         },
         {
            id:2,
            name:"CDK",
            work:"Software devloper"
          },
          {
            id:3,
            name:"Alpesh",
            work:"DataBase"
          },
          {
            id:4,
            name:"Kaka",
            work:"BackEnd"
          }
        ]

      const arrayavtarcard = avatarlistarray.map((avatarcard,i) =>
        {
          return  <Avatarlist key={i} id={avatarlistarray[i].name} 
          name={avatarlistarray[i].name}
          work={avatarlistarray[i].work} />
        })
     return ( 
     <div className="mainpage">
         <h1> {this.state.name} </h1>
          {arrayavtarcard}
           <button onClick={ () => this.namechange() }> Subcribe </button>
         </div>
      )
    }
}


export default Avatar;
