import ReactDom from "react-dom";
//React Dom handles everything that to do with DOM

import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import {Fragment} from "react";

const Backdrop = props =>{
  return <div className={styles.backdrop} onClick={props.onConfirm}/>
};

const ModalOverlay = props =>{
  return(
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
};


const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </Fragment>

    // document.getElementById('backdrop-root') leads us to .../public/index.html File
    // the prop that we pass in createPortal, is the same as we pass in the function, aware of the name!!

  )
}

export default ErrorModal;
