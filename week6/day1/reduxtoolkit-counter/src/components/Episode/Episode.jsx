import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEpisode } from './episodeSlice'

const Episode = () => {
  const dispatch = useDispatch();
  
  const episodes = useSelector(state => state.episode.list);
  const status = useSelector(state => state.episode.status);
  const error = useSelector(state => state.episode.error);

  useEffect(() => {
    if(status === "idle"){
        dispatch(fetchEpisode())
    }
    console.log(dispatch);
    console.log(status);
  }, [status])

  if(status === "loading"){
    return <h2>Loading...</h2>
  }

  if(status === "rejected"){
    return <h2>{error}</h2>
  }

  return (
    <div>
        {
            episodes.map(episode => {
                return <div key={episode.id}>{episode.name}</div>
            })
        }
    </div>
  )
}

export default Episode