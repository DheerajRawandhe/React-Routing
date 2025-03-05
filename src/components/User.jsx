import React from "react";
import { useParams } from "react-router-dom"

export default function User()  {

  const params = useParams()
  return (
  <>
  <h3>I am User {params.username}</h3>
  </>
  )
}
