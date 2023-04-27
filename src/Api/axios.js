import axios from "axios";
import React from 'react'
// 
// https://crystal-parts-server.onrender.com

export default axios.create({
    baseURL:"http://localhost:9000/"
})