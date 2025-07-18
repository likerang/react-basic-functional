import './App.css';

import React, { useState } from 'react'
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Create from './components/Create';
import Modify from './components/Modify';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = ()=>{
  const [mode, setMode] = useState('welcome');
  const [selected_id, setSelected_id] = useState('welcome');
  const [max_id, setMax_id] = useState('welcome');
  const subject = {title:'React', desc:'Single page application'};
  const welcome = {title:'Welcome', desc:'Welcome to React'};
  const [menus, setMenus] = useState(
    [
      {id:1, title:'HTML', desc:'Hypertext Markup Language', difficulty:1},
      {id:2, title:'CSS', desc:'CSS is for Design', difficulty:2},
      {id:3, title:'Javascript', desc:'Javascript is for interaction', difficulty:3}
    ]
  );

//함수형 컴포넌트
const getArticles = ()=>{
    let _main = null; //상황에 따라 바뀌는 값은 _변수명으로 작성하는게 관례다.

    if(mode === 'welcome'){
      let data = welcome;
      _main = <Main data={data} mode={mode}/>;
    }else if(mode === 'read'){
      let data = getReadArticle();
      _main = <Main data={data} onChangeMode={()=>{
        setMode('modify');
      }}
      deleteForm={(id)=>{
        console.log(id);
        if(window.confirm('정말 삭제할까요 ?')){
          /*
          메뉴의 복사본을 변수명 _menus에 할당 할당
           _menus에서 del_id번째 요소를 제거 splice
          _menus에서 넘어온 id와 일치하는 요소의 인덱스 번호 del_id에
          */
          let _menus = [...menus];
          
          let del_id = _menus.findIndex(d=> d.id === id);
          _menus.splice(del_id, 1);

          setMode('welcome');
          setMenus(_menus);

        }
      }}
      />;

    }else if(mode === 'create'){
      _main = <Create createForm={(title, desc, difficulty)=>{
        let new_max_id = max_id + 1;

        //복사본 만들기
        let _menus = menus.concat(
          {id:new_max_id, title:title, desc:desc, difficulty:difficulty}
        );

        setMode('welcome');
        setMenus(_menus);
        setMax_id(new_max_id);

      }}/>
    }else if(mode === 'modify'){
      _main = <Modify 
        data={getReadArticle()} 
        modifyForm={(title, desc, difficulty)=>{
          
          //메뉴 내용 수정 [스프레드 연산자 : 배열이나 객체의 값을 풀어헤쳐서 사용]
          let _menus = menus.map(m=>//menus 안에 있는거 마다마다 할일
            m.id === selected_id
            // ? {id:m.id, title:title, desc:desc} 
            ? {...m, title, desc, difficulty} //m 항목에 있는 객체들을 풀어헤치고 title, desc만 변경해! 
            : m 
          );

          setMode('read');
          setMenus(_menus);
          
        }}
        />;
    }
    return _main;
  }
const getReadArticle = ()=>{
    let data = menus.find(m=> m.id === selected_id);
    return data;
  }

return (
    <div className='container'>
    <Header 
      title={subject.title} desc={subject.desc}
      onChangeMode={()=>{
        setMode('welcome');
      }}
      />
    <Nav data={menus} onChangeMode={(id)=>{
      setMode('read');
      setSelected_id(id)
    }}/>
    {getArticles()} 
    <hr/>
    <div className='d-flex justify-content-end'>
      <Button onClick={()=>{
        setMode('create');
      }} variant="info">Create</Button>
    </div>
    </div>
)
  
}


export default App;