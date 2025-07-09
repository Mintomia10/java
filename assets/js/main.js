const handleSearch = () => {
  const searchField = document.getElementById("search-input-field");
  const searchText = searchField.value;

  loadPhone(searchText);
};

const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  console.log(data);
};
