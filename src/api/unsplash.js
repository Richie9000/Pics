import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID aWoo1rz6h5kGHihI0qVZgBh6Yy9DF3kCWE0ngxwRG98" }
})