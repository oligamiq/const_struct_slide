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
#[derive(Debug)]
struct Foo<const N: usize>([i32; N]);

let s = Foo([9,5,61,44]);
dbg!(s);
`;

export const Example3 = `
#[derive(ConstStruct, Debug)]
struct Foo{
    a: i32,
};

pub fn tester<A: FooTy>() {
    println!("a: {:?}", A::__DATA);
}

tester::<Foo!(Foo { a:6 })>();
`;
