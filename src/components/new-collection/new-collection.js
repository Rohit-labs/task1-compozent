import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "title 1",
      subTitle: "sub_title1",
      price: 121,
      id : 21,
    },
    {
      image:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "title 2",
      subTitle: "sub_title2",
      price: 121,
      id : 22,
    },
    {
      image:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "title 3",
      subTitle: "sub_title3",
      price: 121,
      id : 23,
    },
    {
      image:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "title 4",
      subTitle: "sub_title4",
      price: 121,
      id : 24,
    },
    {
      image:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "title 5",
      subTitle: "sub_title5",
      price: 121,
      id : 25,
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              id={item.id}
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
