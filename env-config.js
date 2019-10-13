const prod = process.env.NODE_ENV === "production";

module.exports = {
    "process.env.BASE_URL": prod ? "https://tech-blog-nextjs.herokuapp.com" : "http://localhost:3000",
    "process.env.NAMESPACE": "https://tech-blog-nextjs.herokuapp.com",
    "process.env.AUTH0_CLIENT_ID": "odZXfHCBiMY1FMx6d0YTInqwCg7y1R11",
}