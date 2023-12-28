export const FashionApi = 'https://fakestoreapi.com/products/'

export const filterData = (searchText, Fashion) => {
    const filter = Fashion.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return filter;
};