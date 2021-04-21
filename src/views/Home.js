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
            console.log(recipes);
        })
    }

    loopItem(item){
        return(
            <div className="loadMore">
                    <Post 
                        key={item.id}
                        name={item.name}
                        profile={photo}
                        thumbnail={item.thumbnail_url}
                        likesCount="7"
                        commentsCount="7"
                        body={item.description}
                        publishedAt="pagi pagi"
                    />      
            </div>
        )
    }

    render() {
        return (
            <>
            <div className="col-lg-6">
                {this.state.recipes.slice(0).map(this.loopItem)}
            </div>
            <RightSidebar />
            </>
            
        )
    }
}
