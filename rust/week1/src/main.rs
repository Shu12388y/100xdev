// data types in rust

// represent numbers - u32, u8, u64, u128 (unsigned)
// i32, i64m i128 (signed)

fn main() {
    let res = sum(12, 32);
    let ans: bool = is_even(12);
    print_name();
    println!("{}", res);
    println!("{}", ans);
    is_array();
    is_vector();
    is_loop();
}

// sum function
fn sum(a: u32, b: u32) -> u32 {
    return a + b;
}

// isEven
fn is_even(a: u32) -> bool {
    return a % 2 == 0;
}

// String
fn print_name() {
    let name = String::from("Shubham");
    println!("{}", name);
}

// Array
fn is_array() {
    let arr: [i32; 5] = [1, 2, 3, 4, 5];
    println!("{}", arr.len());
}

// vectors
fn is_vector() {
    let mut xs = vec![1, 2, 3];
    println!("{}", xs.len());
    xs.push(1);
    println!("{}", xs.len());
}

// loop
fn is_loop() {
    for i in 0..32 {
        println!("{}", i);
    }
}



// by default variable are immutable

fn mut_variable()->str{
    let mut name = String::from("shubham");
    return name; 
}