import React, {createContext, useEffect, useState} from "react"
import axios from 'axios'
import {UserContext} from "./UserContext";

export const PostContext = createContext(true)

export const PostProvider = (props) => {
    const API_URL = process.env.REACT_APP_API_URL

    const [post_list, set_post_list] = useState(null)

    const fetch_posts = async () => {
        const res = await axios({
            method: "get",
            url: `${API_URL}posts/`
        })

        if(res.status === 200){
            set_post_list(res.data)
        }
    }

    const fetch_post_details = async (slug) => {
        const res = await axios({
            method: "get",
            url: `${API_URL}posts/${slug}/`
        })

        if(res.status === 200){
            return res.data
        }
    }

    useEffect(() => {
        fetch_posts()
    }, [])

    return (
        <PostContext.Provider value={
            {
                post_list: post_list,

                fetch_post_details: fetch_post_details
            }
        }>

            {props.children}

        </PostContext.Provider>
    )
}