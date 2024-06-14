// app/post/[id]/page.tsx
import { useRouter } from 'next/router';
import axiosInstance from '../../../src/utils/axiosInstance';
import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPost = async (id: string): Promise<Post> => {
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
}

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPost(params.id);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl mb-4">{post.title}</h1>
      <p className="mb-4"><strong>User ID:</strong> {post.userId}</p>
      <p>{post.body}</p>
      <Link href={`/`} className="text-blue-500 hover:underline">
                  Volver
       </Link>
    </div>
  );
};

export default PostPage;
