import {useState, useRef, useEffect, Component} from "react";
import { Card, Prayer, Title, Description, Footer, Author, Date } from "./styles/List.styled";

export default function List({data: {title, description, name, dateCreated}}) {
  var d = '';
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  if (dateCreated !== null)
  {
    d = new window.Date(dateCreated);
    d = Intl.DateTimeFormat('en-US', options).format(d);
  }
  
  console.log(d);
  return (
    <>
    <Card>
      <Prayer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Prayer>
      <Footer>
        <Author>~{name || "Anonymous"}</Author>
        <Date>{d || "February, January 30th, 2023"}</Date>
      </Footer>
    </Card>
    </>
  )
}