import { useState } from "react";

const Filter = () => {
  const [isActive, setIsActive] = useState(false);
  const navigation = [
    { name: "All", dataset: "all" },
    { name: "Games", dataset: "games" },
    { name: "Movies", dataset: "movies" },
    { name: "Comics", dataset: "comics" },
    { name: "Tech", dataset: "tech" },
  ];

  const handleClick = (e) => {
    console.log(e.target.dataset.type);
  };

  return (
    <div className="filter">
      <ul>
        {navigation.map((item) => (
          <li
            onClick={(e) => handleClick(e)}
            key={item.name.toLowerCase()}
            data-type={item.dataset}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
