package DSA

import "fmt"

func SortedSquares(nums []int) []int {
	n := len(nums)
	result := make([]int, n)
	left, right := 0, n-1
	position := n - 1
	for left <= right {
		rightSq := nums[right] * nums[right]
		leftSq := nums[left] * nums[left]
		fmt.Println(left, right, nums[right], nums[left], rightSq, leftSq, rightSq > leftSq)
		if rightSq > leftSq {
			right--
			result[position] = rightSq
		} else {
			result[position] = leftSq
			left++
		}
		position--
	}
	return result
}
