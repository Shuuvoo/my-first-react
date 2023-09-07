// export default function Todo({task,isDone}){
//     return(
//         <li>Task:{task}</li>
//     )
// }

// conditional rendering part 1 

// export default function Todo({task,isDone}){
//     if(isDone===true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work On : {task}</li>
//     }
// }

// conditional rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finish: {task}</li>
//     }
//     return <li>Work on : {task}</li>
// }

// conditional rendering 3
// export default function Todo({task, isDone}){
//     return(
//         <li>{isDone? 'Finished' :'Work On'} : {task}</li>
//     )
// }

// conditional renderring option 4
// export default function Todo({task, isDone}){
//     return <li>{task} {isDone && ': Done'}</li>
// }

// conditional rendering option 5
export default function Todo({task, isDone}){
    return <li>{task} {isDone || ': Do it'}</li>
}