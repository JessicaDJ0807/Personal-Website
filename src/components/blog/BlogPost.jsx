import React from "react";
import bloglist from "../../editable-stuff/blog";
const BlogPost = ({ match }) => {
    const { id } = match.params;
    const post = bloglist[id];

    var element = document.getElementById("BlogCardBox");
    element.parentNode.removeChild(element);

    return (
        <div className="container-lg mt-5">
            {post && (
                <div style={{ paddingTop: "1rem" }}>
                    <h4 className="display-4 text-center">{post.title}</h4>
                    {/* <img className="img-fluid mb-2" src={post.image} alt={post.title} /> */}
                    {post.getBlog()}
                </div>
            )}
            {!post && (
                <h1 className="display-1 text-center">404 - Page not found</h1>
            )}
        </div>
    );
};

export default BlogPost;
