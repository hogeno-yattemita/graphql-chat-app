// +build tools

package tools

import (
	_ "github.com/99designs/gqlgen"
	_ "golang.org/x/tools/internal/imports"
	_ "golang.org/x/tools/internal/gocommand"
	_ "golang.org/x/tools/go/packages"
)