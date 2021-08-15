import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "katex/dist/katex.min.css";

class BlogBuilder {
    list = [];

    constructor({ title, image, description }) {
        this.title = title;
        this.image = image;
        this.description = description;
    }

    addParagraph = (props) => {
        this.list.push(
            <p key={this.list.length} className="lead">
                {props}
            </p>
        );
        return this;
    };

    addCode = (props) => {
        this.list.push(
            <pre>
                <code key={this.list.length}>{props}</code>
            </pre>
        );
        return this;
    };

    addHeading = (props) => {
        this.list.push(
            <Fragment key={this.list.length}>
                <h2 className="">{props}</h2>
                <hr />
            </Fragment>
        );
        return this;
    };

    addMarkdown = (props) => {
        this.list.push(
            <ReactMarkdown
                children={props}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, "")}
                                style={materialLight}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            />
        );
        return this;
    };

    getBlog = () => {
        return <div className="container-lg">{this.list}</div>;
    };
}

export { BlogBuilder };
