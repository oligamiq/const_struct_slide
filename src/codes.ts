export const Example1 = `
use const_struct::{primitive::F32Ty, F32};

pub fn tester<A: F32Ty>() {
    println!("a: {:?}", A::__DATA);
}

fn main() {
    tester::<F32!(0.5)>();
}
`;

export const Example2 = `
struct Foo<const N: usize>([i32; N]);

fn main() {
    let _ = Foo([0; 3]);
}
`;
