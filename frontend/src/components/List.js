import {useState, useRef, useEffect, Component} from "react";
import { Card, Prayer, Title, Description, Footer, Author, Date } from "./styles/List.styled";

export default function List({data: {title, description, uid, date}}) {

  return (
    <>
    <Card>
      <Prayer>
        <Title>Title: {title}</Title>
        <Description>Description: {description}</Description>
      </Prayer>
      <Footer>
        <Author>ID: {uid}</Author>
        <Footer>Date Posted: {date}</Footer>
      </Footer>
    </Card>
    </>
  )
}