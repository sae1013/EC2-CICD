import React from 'react'
import classes from './SkeletonView.module.css';

function SkeletonView() {
  return (
    <div className={classes.card}>
      <div className={classes.card_contents}>
        <div className={classes.header}>
          <div className={classes.header_image}>
            <div className={`${classes.img} ${classes.skeleton}`}></div> 
          </div>
          <div className={`${classes.header} ${classes.skeleton}`}></div>
        </div>
        <div className={classes.contents}>
          <p className={`${classes.contents_1} ${classes.skeleton}`}></p> 
          <p className={`${classes.contents_2} ${classes.skeleton}`}></p> 
        </div>
      </div>
    </div>
  )
}

export default SkeletonView
