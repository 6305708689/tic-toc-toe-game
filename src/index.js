import React,{useState} from 'react';
import  ReactDOM  from 'react-dom/client';
import'./index.css'



function App(){
    const[turn,setturn]=useState('❌')
const[cells,setcells]=useState(Array(9).fill(''))
const[winner,setwinner]=useState("")

const checkforwinner=(squares)=>{
    let combos={
        cross:[[0,1,2],
               [3,4,5],
               [6,7,8] ],
    
    down:[[0,3,6],
           [1,4,7]
        , [2,5,8]],

diagonal:[[0,4,8],
          [2,4,6]]

}

for(let combo in combos){
    combos[combo].forEach((pattern)=>{
        // console.log(pattern)
        if(squares[pattern[0]]===""||squares[pattern[1]]===""||squares[pattern[2]]===""){
            //do nothing
        }
       else if(squares[pattern[0]]===squares[pattern[1]] && squares[pattern[1]]===squares[pattern[2]]){
console.log(pattern[0]+""+pattern[1]+""+pattern[2])
        setwinner(squares[pattern[0]]);
        }
    })
}
    
}

    const handleClick=(num)=>{
        if(cells[num]!==""){
            alert('Already clicked')
            return;
        }
     

      let  squares=[...cells];

        if(turn ==='❌'){
        
        squares[num]= '❌';
     
            setturn('⭕')
        }
        else{
            squares[num]='⭕';
            setturn('❌')
        }
        checkforwinner(squares)
       setcells(squares)
console.log(squares)
     
          }
    let Cell=({num})=>{
       return <td onClick={()=>{handleClick(num)}}>{cells[num]}</td>
    }
    const removedata=()=>{
      
            setwinner("")
            setcells(Array(9).fill(""))
        
    }
    
    return(<>
    <h1>Tic Toc Toe Game 💥</h1>
        <div className='container'>
             
            <table>
              
                <h2>Turn:{turn}</h2>
           
                <tbody>
                    <tr>
                   <Cell num={0}/>
                   <Cell num={1}/>
                   <Cell num={2}/>

                    </tr>
                    <tr>
                    
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                    </tr>
                    <tr>
                    
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                    </tr>
                </tbody>
               
            </table>
            {winner &&
                <>
                <p>{winner} is the winner</p>
                <button onClick={()=>{
                    removedata()
                }}>Play again</button>
                
                
                </>
                }
        </div>
        </>
    )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);