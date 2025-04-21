package main

import (
	"fmt"

	"pckg.my/DSA"
)

func main() {
	nums := []int{-4, -1, 0, 3, 10}
	fmt.Println("Input:", nums)
	fmt.Println("Sorted Squares:", DSA.SortedSquares(nums))
}
