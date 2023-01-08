run:
	cd chat; go run ./server/server.go
generate:
	cd chat; go run github.com/99designs/gqlgen generate