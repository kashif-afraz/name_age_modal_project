import React from 'react'
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const ErrorModal = () => {
  return (
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2></h2>
        </header>
        <div className={classes.content}>
            <p></p>
        </div>
        <footer>

        </footer>
    </Card>
  )
}

export default ErrorModal