run-front:
	cd my-app; npm run start:graphql-transport-ws
run-back:
	cd chat; go run ./server/server.go
generate:
	cd chat; go run github.com/99designs/gqlgen generate