import React from 'react'
import Button from 'react-bootstrap/Button';

const Main = (props)=>{
  let className = ''; //클래스명을 변수로 만들고 기본값을 넣은 후
  if(props.mode === 'welcome'){//모드가 welcome이면
    className += ' d-none';//d-none을 추가해라. 근데 d-none 앞에 스페이스가 있어야 클래스로 추가됨~
  }
  return (
    <>
      <main className='shadow p-3 mb-5 bg-body-tertiary rounded'>
        <article>
          <h2>{props.data.title}</h2>
          <p>{props.data.desc}</p>
          <p className={`${className}`}>난이도 : {props.data.difficulty}</p>
        </article>
        <div className={`d-flex justify-content-end gap-2 ${className}`}>
          <hr/>
          <Button 
          onClick={()=>{
            props.onChangeMode(); //부모로부터 전달받은 함수를 실행..
          }}
          variant="secondary" className='btn-sm'>Modify</Button>
          <Button onClick={()=>{
            props.deleteForm(props.data.id);
          }}
          variant="danger" className='btn-sm'>Delete</Button>
        </div>
      </main>
    </>
  )
}


export default Main;