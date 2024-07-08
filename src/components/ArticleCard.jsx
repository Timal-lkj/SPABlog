export default function ArticleCard({ article }) {
  return (
    <li
      key={article.id}
      className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6"
    >
      <div className="flex">
        <div className="mr-4 flex-shrink-0">
          <img
            src={article.cover_image}
            alt=""
            className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold">{article.title}</h4>
          <p className="mt-1">{article.excerpt}</p>
          <p className="mt-1">
            Article de {article.author} . {article.date}
          </p>
          <a href="#" className="text-indigo-500 hover:underline">
            Lire la suite
          </a>
        </div>
      </div>
    </li>
  );
}
