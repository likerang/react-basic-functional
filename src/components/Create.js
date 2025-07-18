import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Create = (props)=>{
  return (
    <div className='shadow p-3 mb-5 bg-body-tertiary rounded'>
      <h2>Create Article</h2>
      <Form action='#' onSubmit={(e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        // console.log(e.target.title.value);
        // debugger;
        props.createForm(e.target.title.value, e.target.desc.value, e.target.difficulty.value);
        //사용자가 입력한 값을 확인해서 던져주는 역할
      }}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" placeholder="제목을 입력하세요." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="desc" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="difficulty">
          <Form.Label>difficulty</Form.Label>
          <Form.Control type="number" name="difficulty" min={0} max={5} />
        </Form.Group>
        <Button type="submit" variant="secondary">입력</Button>
      </Form>
    </div>
  )
}

export default Create;