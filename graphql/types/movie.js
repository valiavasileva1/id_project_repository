export default `

    type Movie {
        _id: String!
        title: String!
        description: String!
        rating: Float!
        image: String!
    }

    input CreateMovieInput {
        title: String!
        description: String!
        rating: Float!
        image: String!
    }

    type Query {
        movie(_id: String!): Movie
        movies: [Movie]
    }

    type Mutation {
        createMovie(movie: CreateMovieInput!): Movie
        editMovie(_id: String!, movie: CreateMovieInput!): Movie
        deleteMovie(_id: String!): Movie
    }

`