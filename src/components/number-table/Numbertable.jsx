import './NumberTable.css';


function Numbertable({ limit }) {
    const table = [];
    for (let i = 0; i < limit; i ++) {
        table.push(i +1);
    }

    const numTable = () => {
        return table.map((number, index) => {
            return number % 2 === 0 ? <p className='even' key={index} > {number}</p> : <p className='odd' key={index} > {number}</p>
        });
    }
  return (
    <div className='number-table'>
        {numTable()}
    </div>    
    )
}

export default Numbertable