package main

import (
	"fmt"
)

func main() {
	var st = "Ronak"
	var X = 10.212333
	XX := []int{12, 34, 12, 345, 6773, 23425, 23}
	fmt.Printf("Hello %s -> %10.2f\n", st, X)
	// reader := bufio.NewReader(os.Stdin)
	// s, _ := reader.ReadString('\n')
	// fmt.Println("Output is ", s)
	// fmt.Print(string(st), ",")
	for i, v := range XX {
		fmt.Print(i, v, '\n')
	}

	for _, v := range XX {
		fmt.Println(v)
		x, _ := fmt.Println(v)
		fmt.Printf("%i", x)
	}
}
