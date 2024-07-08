import Nav from "../components/nav";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import Sidebar from "../components/SidebarNavigation";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simule la récupération des données depuis une API
    const mockData = {
      articles: [
        {
          id: 1,
          title: "Introduction to React",
          cover_image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          excerpt:
            "React is a JavaScript library for building user interfaces ...",
          author: "John Doe",
          date: "2023-01-01",
          content: "Full content of the article goes here ...",
          comments: [
            { author: "Jane Smith", text: "Great article!" },
            { author: "Bob Johnson", text: "Very informative, thanks!" },
          ],
        },
        {
          id: 2,
          title: "Understanding Vue.js",
          cover_image:
            "https://images.unsplash.com/photo-1550525831-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          excerpt:
            "Vue.js is a progressive framework for building user interfaces ...",
          author: "Alice Doe",
          date: "2023-02-01",
          content: "Full content of the article goes here ...",
          comments: [{ author: "Tom White", text: "Nice overview of Vue.js!" }],
        },
        {
          id: 3,
          title: "Mastering Angular",
          cover_image:
            "https://images.unsplash.com/photo-1529220502050-f15e570c634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          excerpt:
            "Angular is a platform for building mobile and desktop web applications ...",
          author: "Robert Brown",
          date: "2023-03-01",
          content: "Full content of the article goes here ...",
          comments: [
            { author: "Lucy Green", text: "Very detailed article!" },
            { author: "Emma Wilson", text: "Helped me a lot, thanks!" },
          ],
        },
        {
          id: 4,
          title: "Introduction to Svelte",
          cover_image:
            "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          excerpt:
            "Svelte is a radical new approach to building user interfaces ...",
          author: "William Lee",
          date: "2023-04-01",
          content: "Full content of the article goes here ...",
          comments: [{ author: "Nancy King", text: "Really interesting!" }],
        },
        {
          id: 5,
          title: "Getting Started with Node.js",
          cover_image:
            "https://images.unsplash.com/photo-1517430816045-df4b7de3e8d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          excerpt:
            "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine ...",
          author: "Michael Scott",
          date: "2023-05-01",
          content: "Full content of the article goes here ...",
          comments: [
            { author: "Angela Lopez", text: "Great introduction to Node.js!" },
          ],
        },
        {
          id: 6,
          title: "Building APIs with Express.js",
          cover_image:
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          excerpt:
            "Express is a minimal and flexible Node.js web application framework ...",
          author: "Jessica Davis",
          date: "2023-06-01",
          content: "Full content of the article goes here ...",
          comments: [{ author: "Samuel Jackson", text: "Very useful guide!" }],
        },
        {
          id: 7,
          title: "Introduction to MongoDB",
          cover_image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          excerpt:
            "MongoDB is a document database, which means it stores data in JSON-like documents ...",
          author: "Sarah Walker",
          date: "2023-07-01",
          content: "Full content of the article goes here ...",
          comments: [{ author: "Lisa Kim", text: "Clear and concise!" }],
        },
        {
          id: 8,
          title: "Getting Started with Docker",
          cover_image:
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          excerpt:
            "Docker is an open platform for developing, shipping, and running applications ...",
          author: "James Smith",
          date: "2023-08-01",
          content: "Full content of the article goes here ...",
          comments: [
            { author: "Henry Taylor", text: "Great intro to Docker!" },
          ],
        },
        {
          id: 9,
          title: "Understanding Kubernetes",
          cover_image:
            "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          excerpt:
            "Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications ...",
          author: "Patricia Johnson",
          date: "2023-09-01",
          content: "Full content of the article goes here ...",
          comments: [
            { author: "Thomas Brown", text: "Very helpful explanation!" },
          ],
        },
        {
          id: 10,
          title: "Mastering TypeScript",
          cover_image:
            "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          excerpt:
            "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript ...",
          author: "Chris Wilson",
          date: "2023-10-01",
          content: "Full content of the article goes here ...",
          comments: [
            {
              author: "Karen Lee",
              text: "Excellent introduction to TypeScript!",
            },
          ],
        },
      ],
    };
    setArticles(mockData.articles);
  }, []);

  return (
    <>
      <Nav />
      <main className="mt-40">
        <div className="xl:pr-96">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            {/* Article */}
            <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
              <ul role="list" className="space-y-3">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <aside className="bg-white lg:fixed lg:bottom-0 lg:right-0 lg:top-24 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
        <Sidebar />
      </aside>
      <Footer />
    </>
  );
}
