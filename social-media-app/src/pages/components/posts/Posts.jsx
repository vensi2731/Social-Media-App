import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios"; // Ensure correct import

function Posts() {
    const { isLoading, error, data } = useQuery({
        queryKey: ["posts"],
        queryFn: () => makeRequest.get("/posts").then((res) => res.data),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div className="posts">
            {data.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
}

export default Posts;
