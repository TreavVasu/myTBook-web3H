import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
// import Thumbnail from "react-webpage-thumbnail";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function ValidURL(str) {
    var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
      console.log("Not a valid URL.");
      return false;
    } else {
      return true;
    }
  }

    // Check for right url 
    const re = "/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm";
    let str = props.content;
    let result  =  ValidURL(str);//str.match(re);

    if(result){

      // get tweet id
      let realId ="";
      for(let i=0;i<str.length;i++){
        if(str.substring(i,i+7)=="status/"){
            realId=str.substring(i+7,i+7+19);
            break;
        }
      }
      
      console.log(realId);
      return  (
        <div className="note">
            <TwitterTweetEmbed tweetId={realId}/>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
      );
    }


  return (

    <div className="note">
      {/* <Thumbnail url={props.title}  /> */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
