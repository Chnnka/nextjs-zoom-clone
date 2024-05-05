import React from 'react'

interface MeetingModalProps{
  isOpen:boolean;
  onClose:()=>void;
  title:string;
  className:string;
  buttonText:string;
  image:string;
  buttonIcon:string;
  children:string;
  handleClick:()=>{};
}
const MeetingModal = ({isOpen,onClose,title,className,children,handleClick,buttonText,image,buttonIcon}) => {
  return (
    <div>MeetingModal</div>
  )
}

export default MeetingModal