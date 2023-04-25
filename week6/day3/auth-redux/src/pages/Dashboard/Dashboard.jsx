import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from '../../actions';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DashboardSection = styled.div`
  padding: 1rem 2rem;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);

    const posts = useSelector(state => state.post.posts);
    const isLoading = useSelector(state => state.post.isLoading);
    const isError = useSelector(state => state.post.error);

    useEffect(() => {
      console.log(user);
      if(user) {
        dispatch(fetchPosts(user.id))
      }else{
        navigate("/register")
      }
    }, [user])
    
  return (
    <DashboardSection>
        <h1>Welcome, {user && user.name}</h1>
        <p>You are using this email address: <b>{user && user.email}</b></p>

        <h1>Posts</h1>
        {
          isLoading ? <h4>Loading...</h4>
          :
          posts && posts.map(post => {
            return (
              <div key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </div>
            )
          })
        }
    </DashboardSection>
  )
}

export default Dashboard