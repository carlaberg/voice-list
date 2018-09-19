import { Query } from 'react-apollo';
import GET_POSTS from '../../queries/posts.graphql';

const PostListing = () => (
  <Query query={GET_POSTS}>
    {({ loading, data }) => {
      if (loading) return <div>loading...</div>;
      const { allPosts: posts } = data;

      return posts.map((post, index) => <h2 key={index}>{post.title}</h2>);
    }}
  </Query>
);

export default PostListing;
