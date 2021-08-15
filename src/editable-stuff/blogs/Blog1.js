import { BlogBuilder } from "../../components/blog/BlogBuilder";

const blog1 = new BlogBuilder({
    title: "Testing Blog",
    description: "This is a testing blog!",
})
    .addHeading("English")
    .addParagraph("1st Paragraph in English")
    .addParagraph("2nd Paragraph in English")

    .addHeading("Chinese")
    .addParagraph("1st Paragraph in Chinese")
    .addParagraph("2nd Paragraph in Chinese")

    .addHeading("Code")
    .addCode(
        `
var x = 1;
y = x;
x++;
`
    )
    .addCode(
        `
int x = 1;
long long y = x;
x++;
`
    )
    .addMarkdown(
        `
## Markdown  
Given a **formula** below  
$$
\\int_0^\\infty x^2 dx
$$ 
 
~~~python
print('Hello World!')
~~~
`
    );

export default blog1;
