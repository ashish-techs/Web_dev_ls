import React, { useEffect } from 'react';




let timer=500,timeout

function Notes(props) {

  const formatDate=(value)=>{

  
  
  if (!value) return ""

  const date=new Date(value)

  let hrs=date.getHours()
  let amPm=hrs>12?"PM":"AM"
  hrs=hrs?hrs:"12"
  hrs=hrs>12?hrs=24-hrs:hrs

  let min=date.getMinutes();
  min=min<10?"0"+min:min

  let day=date.getDate();
  const monthNames=['January','February','March','April', 'May', 'June','July','August','September','October','November','December'];
  const month=monthNames[date.getMonth()]

  return `${hrs}:${min} ${amPm}, ${day} ${month}`
  };
  
  const debounce=(func)=>{
    clearTimeout(timeout)
    timeout=setTimeout(func,timer);
  }

  const updateText=(text,id)=>{
    debounce(()=>props.updateText(text,id))
  }

  return (
    <div className="card mt-3 mb-3 ms-3 me-3 shadow-sm" style={{ width: '20rem' }}>
      <div className="card-body">
      <div data-mdb-input-init class="form-outline">
          <textarea class="form-control border-0" onChange={(event)=>updateText(event.target.value,props.notes.id)} id="textAreaExample1" placeholder="Title" rows="1" style={{
            fontSize: '1.5rem',
            resize:'none'
            
          }}></textarea>
          
    </div>
    <div data-mdb-input-init class="form-outline mt-3 mb-2">
            <textarea class="form-control" id="textAreaExample1" placeholder="Enter note" rows="4" style={{
              fontSize: '1rem',
              resize:'none'
            }}></textarea>

        <p className="my-3">{formatDate(props.notes.time)}</p>  
    </div>
        
        <span className="tt" data-bs-placement="bottom" title="Delete note">
          <button type="button" className="btn btn-outline-secondary rounded-pill border border-3" onClick={()=>props.deleteNote(props.notes.id)}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </span>
      </div>
    </div>
    );
}
 
export default Notes;