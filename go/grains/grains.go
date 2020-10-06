package grains

import (
	"errors"
	"math"
)

// Square returns the number of grains on a given square.
func Square(square int) (uint64, error) {
	if square < 1 || square > 64 {
		return 0, errors.New("square doesn't exist")
	}
	return 1 << (square - 1), nil
}

// Total returns the total number of grains on the chessboard.
func Total() uint64 {
	return math.MaxUint64
}
