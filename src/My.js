//code splitting


// const name = 'Chetan'
// export default name;

// export const secondName = 'Aryan'
// export const thirdName = 'ravi'
// export const fourthName = 'Pooja'

// export secondName;


// The variable 'name' is known as default export
// The variable 'secondName' is known as named export.

// There can only one default export in a module.
// There can be any named exports in a module.




// const names = ['Chetan', 'Pooja', 'Ajay']
// const names = [
//   {
//     fn: 'Aaryan',
//     ln: 'Jain'
//   },
//   {
//     fn: 'Abhimanyu',
//     ln: 'Singh'
//   }
// ]
// export default names


//INLINE CSS IN REACT IS PASSED AS AN OBJECT


function HelloReact(props) {
  return (
    <h1 style={{backgroundColor: 'red', color: 'black'}}>Hello {props.name}</h1>
  )
}



// WHAT IS STATE?
// WHAT IS USESTATE HOOK?




// function HelloReact(props) {
//   console.log(props)
//   return (
//     <>
//       {
//         props.names.map((name) => {
//           return <h1>{name}</h1>
//         })
//       }
//     </>
//   )
// }
export default HelloReact