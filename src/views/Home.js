import React, { Component } from 'react'
import Post from '../components/Post'
import RightSidebar from '../components/Sidebar/RightSidebar'
import axios from 'axios'
import photo from '../assets/images/Annie.PNG'


export default class Home extends Component {
    state = {
        recipes: []
    }

    componentDidMount(){
        const token = localStorage.getItem("bearer")
        axios.get('http://localhost:8000/api/recipes', {
        headers: {
        Authorization: 'Bearer ' + token
        }
        })
        .then(res => {
            const recipes = res.data.data;
            this.setState({ recipes });
            console.log(recipes)
        })
    }

    loopItem(item){
        return(
            <div className="loadMore">
                <Post 
                    key={item.id}
                    name={item.user.name}
                    recipe={item.name}
                    profile={photo}
                    thumbnail={item.thumbnail_url}
                    likesCount="10"
                    commentsCount="10"
                    body={item.description}
                    publishedAt={item.created_at}
                />      
            </div>
        )
    }

    render() {
        return (
            <>
            <div className="col-lg-6">
                {this.state.recipes.map(this.loopItem)}
            </div>
            <RightSidebar />
            </>
            
        )
    }
}
