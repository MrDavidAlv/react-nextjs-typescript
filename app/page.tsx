// app/page.tsx
import axiosInstance from '../src/utils/axiosInstance';
import PostTable from '../src/components/PostTable';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get('/posts');
  return response.data;
}

const HomePage = async () => {
  const posts = await fetchPosts();

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center my-4 font-semibold">Lista de publicaciones</h1>
      <PostTable posts={posts} />
    </div>
  );
};

export default HomePage;
