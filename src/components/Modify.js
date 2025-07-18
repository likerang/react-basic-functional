import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Modify = (props)=>{
  //초기 값 설정
  const [formData, setFormData] = useState({
    title : props.data.title,
    desc : props.data.desc,
    difficulty : props.data.difficulty
  });
  
  //입력하면 작동하는것
  const inputFormHandler = (e)=>{
    const {name, value} = e.target; //구조분해할당
    setFormData(prev=>({//prev 기존의 값
      ...prev, // 기존의 값을 펼쳐서
      [name] : value //새롭게 변경된 것을
    }));//setFormData (세개가 한 꺼번에 useState() 항목 모두 들어감)
    //구조 분해 할당이랑 컴퓨티트를 한번에 사용했음.
    //컴퓨티트 속성(계산된 속성) = > [name]
  }


  return (
    <div className='shadow p-3 mb-5 bg-body-tertiary rounded'>
      <h2>Modify Article</h2>
      <Form action='#' onSubmit={(e)=>{
        e.preventDefault();
        props.modifyForm(e.target.title.value, e.target.desc.value, e.target.difficulty.value);
        //사용자가 입력한 값을 확인해서 던져주는 역할
      }}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            name="title" 
            placeholder="제목을 입력하세요."
             onChange= {inputFormHandler} //밖에있는 this를 넣어줬다
             value={formData.title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            name="desc" 
            rows={3} 
            onChange={inputFormHandler}
            value={formData.desc} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="difficulty">
          <Form.Label>difficulty</Form.Label>
          <Form.Control 
            type="number" 
            name="difficulty" 
            max={5}
            onChange={inputFormHandler}
            value={formData.difficulty} />
        </Form.Group>
        <Button type="submit" variant="secondary">입력</Button>
      </Form>
    </div>
  )
}

export default Modify;