const BASE_URL="https://fakestoreapi.com"

const apiURLs={
    productAPI: `${BASE_URL}/products`,
    categoryAPI:`${BASE_URL}/products/categories`,
    userAPI:{
        register:`${BASE_URL}/users`,
        login: `${BASE_URL}/auth/login`,
        allUsers: `${BASE_URL}/users`
    }
}

export default apiURLs;