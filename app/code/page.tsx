import fs from "fs"
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'


const getPostContent = () => {
    const folder = "posts/index"
    const file = `${folder}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)
    return matterResult;
}


const Page =() =>{
const post = getPostContent()

return (
    <div className="flex justify-center p-2 m-2">
        <article className="prose lg:prose-xl">
            <Markdown>{post.content}</Markdown>
        </article>
    </div>
);

};

export default  Page;