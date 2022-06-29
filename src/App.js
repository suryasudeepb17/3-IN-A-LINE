import React from 'react';
import './App.css';

function Square1({ onClick, value }) 
{
  return (
    <button className="a" onClick={onClick}>
      {value}
    </button>
  );
}
function Square2({ onClick, value }) 
{
  return (
    <button className="b" onClick={onClick}>
      {value}
    </button>
  );
}
function Square3({ onClick, value }) 
{
  return (
    <button className="c" onClick={onClick}>
      {value}
    </button>
  );
}
function Square4({ onClick, value }) 
{
  return (
    <button className="d" onClick={onClick}>
      {value}
    </button>
  );
}
function Square5({ onClick, value }) 
{
  return (
    <button className="e" onClick={onClick}>
      {value}
    </button>
  );
}

function Square6({ onClick, value }) 
{
  return (
    <button className="f" onClick={onClick}>
      {value}
    </button>
  );
}

function Square7({ onClick, value }) 
{
  return (
    <button className="g" onClick={onClick}>
      {value}
    </button>
  );
}

var k;
var status_a;
var status_b;
var temp_remove=0;
var temp_move=0;
var x;
var o;



function Board () {
  const [squares, setSquares] = React.useState(Array(23).fill(null))
  const [isX, setIsX] = React.useState(true);
  const [count,setcount]=React.useState(0);
  const [init,setinit]=React.useState(0);
  const [countX,setcountX]=React.useState(0);
  const [countO,setcount0]=React.useState(0);
  const [xc,setxc]=React.useState(11);
  const [oc,setoc]=React.useState(11);

  if(count<22)
  {
    x='Remaining X : '+(xc);
    o='Remaining O : '+(oc);
  }
  else
  {
    x='';
    o='';
  }
  if(init===0)
  {
    status_a=' '
    status_b='Start With X';
    setinit(init+1);
  }
  const handleClick = (i) =>
  {
    k=i;
    
    if(count<22 && temp_remove===0)
    {
      if(count===21)
      {
        status_b = 'Next Move: X';
      }
      else
      {
        status_b = 'Next Turn: ' + (isX ? 'O' : 'X');
      }
      squares[i] = isX ? 'X' : 'O'
      if(isX===true) setcountX(countX+1);
      else setcount0(countO+1)
      if(isX==true) setxc(xc-1);
      else setoc(oc-1);
      setSquares(squares)
      setIsX(!isX)
      setIsX(!isX)
      setcount(count+1)
      if(calculateWinner(squares,k))
      {
        status_a=(isX ? 'X' : 'O')+' should remove one '+(isX ? 'O' : 'X')+' by clicking on it!!';
        temp_remove=1;
      }
    }
    else if(count>=22 && temp_remove===0 && temp_move===0)
    {
      status_b = 'Next Move: ' + (isX ? 'O' : 'X');
      squares[i]=null
      setSquares(squares)
      temp_move=1;       
    }
    else if(temp_move===1)
    {
      squares[i] = isX ? 'X' : 'O'
      setSquares(squares)
      setIsX(!isX)
      if(calculateWinner(squares,k))
      {
        status_a=(isX ? 'X' : 'O')+' should remove one '+(isX ? 'O' : 'X')+' by clicking on it!!';
        temp_remove=1;
      }
      temp_move=0;
    }
    else if(temp_remove===1)
    {
        if(isX===true) setcountX(countX-1);
        else setcount0(countO-1)
        squares[i]=null
        setSquares(squares)
        temp_remove=0;
        status_a='     ';
    }
    if(countX===2 && count>=22) 
    {
      status_a='This Game Won By O!!'
      status_b=''
    }
    if(countO===2 &&count>=22) 
    {
      status_a='This Game Won By X'
      status_b=''
    }

  }
  
  
  const handleRestart = () => 
  {
    window.location.reload();
    
  }
  const renderSquare1 = (i) => 
  {
    return <Square1 value={squares[i]} onClick={() => handleClick(i)} />
  }
  const renderSquare2=(i)=>
  {
    return <Square2 value={squares[i]} onClick={() => handleClick(i)} />
  }
  const renderSquare3 = (i) => 
  {
    return <Square3 value={squares[i]} onClick={() => handleClick(i)} />
  }
  const renderSquare4 = (i) => 
  {
    return <Square4 value={squares[i]} onClick={() => handleClick(i)} />
  }
  const renderSquare5 = (i) => 
  {
    return <Square5 value={squares[i]} onClick={() => handleClick(i)} />
  }
  const renderSquare6 = (i) => 
  {
    return <Square6 value={squares[i]} onClick={() => handleClick(i)} />
  }
  const renderSquare7 = (i) => 
  {
    return <Square7 value={squares[i]} onClick={() => handleClick(i)} />
  }

  return (
    
    <div className="board">
      <div className="board-row">
        {renderSquare1(0)}
        {renderSquare1(1)}
        {renderSquare1(2)}
      </div>
      <div className="board-row">
        {renderSquare2(3)}
        {renderSquare2(4)}
        {renderSquare2(5)}
      </div>
      <div className="board-row">
        {renderSquare3(6)}
        {renderSquare3(7)}
        {renderSquare3(8)}
      </div>
      <div className="board-row">
        {renderSquare4(9)}
        {renderSquare4(10)}
        {renderSquare4(11)}
        {renderSquare4(12)}
        {renderSquare4(13)}
        {renderSquare4(14)}
      </div>
      <div className="board-row">
        {renderSquare5(15)}
        {renderSquare5(16)}
        {renderSquare5(17)}
      </div>
      <div className="board-row">
        {renderSquare6(18)}
        {renderSquare6(19)}
        {renderSquare6(20)}
      </div>
      <div className="board-row">
        {renderSquare7(21)}
        {renderSquare7(22)}
        {renderSquare7(23)}
      </div>
      <div className="xando">
       <div className="x">{x}</div>
       <div className="o">{o}</div>
      </div>
      <div className="statusa">{status_a}</div>
      <div className="statusb">{status_b}</div>
      <button className="restart" onClick={handleRestart}>Restart Game!</button>
      <div className="footer">
        This Game is actually called DAADI. Its just similar to tic-tac-toe. The main difference between DAADI and tic-tac-toe is DAADI played with 11 coins each whereas tic-tac-toe is played with 3 coins each and after turning all coins in DAADI we have to move each coin one by one and make it 3 in a row if its happens we should remove one opponent coin. The winner is whoever has 2 coins left with them is the looser and the other one is the winner.
      </div>
    </div>
    
  )
}

function calculateWinner(squares,k) 
{
  const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [9,10,11],
    [12,13,14],
    [15,16,17],
    [18,19,20],
    [21,22,23],
    [0,9,21],
    [3,10,18],
    [6,11,15],
    [1,4,7],
    [16,19,22],
    [8,12,17],
    [5,13,20],
    [2,14,23]
  ]
  
  for (let i = 0; i < winningPatterns.length; i++) 
  {
    const [a, b, c] = winningPatterns[i];
    if ((squares[a] && squares[a] === squares[b] && squares[a] === squares[c])&&(k===a || k===b || k===c) )
    {
      return k;
    }
  }
  return null;
}

export default Board;