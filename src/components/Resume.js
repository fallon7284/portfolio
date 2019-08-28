// // import React from 'react'
// import TopBar from './topBar'
// // import Document from 'react-pdf'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// // export default () => {
// //     return (
// //         <div>Hello
// //             <MuiThemeProvider>
// //                 <TopBar/>
// //             </MuiThemeProvider>
// //             <Document className="resume" file="/Users/brendanfallon/projects/portfolio/src/images/BrendanFallon.pdf"/>
// //         </div>   
// //     )
// // }

// // import React, { Component } from 'react';
// // import { Document, Page } from 'react-pdf';
// import res from '../images/BrendanFallon.pdf'
 
// class Resume extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   }


 
//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }
 
//   render() {
//     const { pageNumber, numPages } = this.state;
 
//     return (
//       <div>
//         <a href={res}></a>
//       </div>
//     );
//   }
// }

// export default Resume