// import ai from "../assets/svg/ai-svgrepo-com.svg";
// import dev from "../assets/svg/dev-to-svgrepo-com.svg";
// import js from "../assets/svg/javascript-155-svgrepo-com.svg";
// import reactsvg from "../assets/svg/react-svgrepo-com.svg";
// import robot from "../assets/svg/robot-svgrepo-com.svg";

const categorie = [
  { name: "Developpement", href: "#", current: true },
  { name: "JavaScript", href: "#", current: false },
  { name: "React", href: "#", current: false },
  { name: "AI", href: "#", current: false },
  { name: "Robot", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <h3>Categorie</h3>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {categorie.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                      "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
