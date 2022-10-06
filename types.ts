export interface GetPostResults {
    results: Post[]
}

export interface Post {
    id:        number;
    title:     string;
    body:      string;
    published: boolean;
}