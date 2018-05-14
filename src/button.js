import React, { Component } from 'react';

import styled from 'styled-components';

const Button1 = styled.button`
 border-radius: 3px;
 padding: 0.25em 1em;
 margin: 0 1em;
 background: transparent;
 color: palevioletred;
 border: 2px solid palevioletred;
`;


export default class Button extends Component {
 render() {
   return (
     <div className="App">
       <div>
         <Button1>Normal Button</Button1>
       </div>
     </div>
   );
 }
}
