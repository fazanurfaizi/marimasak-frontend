import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import Post from '../components/Post'
import RightSidebar from '../components/Sidebar/RightSidebar'

const Home = () => {

    const dispatch = useDispatch()        

    const loading = useSelector(state => state.recipe.loading)

    useEffect(() => {
        dispatch(fetchRecipes())        
    }, [dispatch])    

    const recipes = useSelector(state => state.recipe.recipes)

    function loopItem(item) {
        return(
            <div className="loadMore">
                {!loading && 
                    <Post 
                        key={item.id}
                        name={item.user.name}
                        recipe={item.name}                    
                        thumbnail={item.thumbnail_url}
                        likesCount="10"
                        commentsCount="10"
                        body={item.description}
                        publishedAt={item.created_at}
                    />    
                }                  
            </div>
        )
    }

    return (
        <>
            <div className="col-lg-6">
                {recipes.length > 0 && recipes.map(loopItem)}
            </div>
            <RightSidebar />
        </>
    )
}

export default Home
