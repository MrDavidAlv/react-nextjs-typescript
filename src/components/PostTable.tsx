import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostTableProps {
  posts: Post[];
}

const PostTable: React.FC<PostTableProps> = ({ posts }) => {
  return (
    <div className="container mx-auto mt-10 p-4 bg-white rounded shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-gray-100">
              <td className="py-4 px-6 whitespace-nowrap">{post.id}</td>
              <td className="py-4 px-6 whitespace-nowrap">
                <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
                  {post.title}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
