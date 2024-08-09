import React from 'react';
import smartphone from '../img/smartphone.jpg';
import event from '../img/event.jpg';

function Form() {
  return (
    <>
      <InnerForm
        context={'테크 주요 이슈'}
        imgSrc={smartphone}
      />
      <InnerForm
        context={'특가 이벤트'}
        imgSrc={event}
      />
    </>
  );
}

function InnerForm(props) {
  return (
    <div style={{ display: 'inline-block', border: '2px solid gray', width: '30%', margin: '4em 8em', overflow: 'hidden' }}>
      <style>{`
      @media screen and (max-width: 600px) {
     .text {
      display: none}}`}
      </style>
      <form style={{ width: 'auto', height: '20em' }}>
        <h3 style={{ textAlign: 'center' }}>{props.context}</h3>
        <img src={props.imgSrc} alt='기사 사진' style={{ float: 'left', margin: '20px', width: '200px', height: '150px', backgroundSize: 'contain' }} />
        <div style={{ margin: '20px' }}>
          <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla facere minima quia odit eveniet dolorum atque cuus libero pariatu</p>
          <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla facere minima quia odit eveniet dolorum atque cuus libero pariatu</p>
          <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla facere minima quia odit eveniet dolorum atque cuus libero pariatu</p>
        </div>
      </form>
    </div>
  )
}

export default Form;
