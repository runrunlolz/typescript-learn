var string: string = "string";

//string = 30; 
//在TS中不能赋其他类型的值,会提示错误 但是能编译JS中不报错

var myName = "haha";
//myName = 30 也不能赋其他类型的值

var test: any = "hello";
//可以赋其他类型的值 不会报错
test = 30;

var age: number = 28;//数字类型
var man: boolean = true;//布尔类型
var arr: number[] = [1,2];//数字类型
var arr1: Array<number> = [1,2];
var tuple: [string, number] = ['hello', 10];//元祖类型
console.log(tuple[0].substr(1));//[0]指的是'hello' string
enum Color {Red = 1, Green, Blue = 5}
var c:Color = Color.Blue //枚举类型;可以设置元素编码
console.log(c);
var colorName:string = Color[3];
//3是 undefined 设置了元素编码 1 red 2 green 5 blue
console.log(colorName); 

var u: undefined = undefined;// undefind类型
var n: null = null;//null类型
//never 类型 object 类型



function fn1( name:string) :void{

}
//入参可以设置类型, void此方法不需要返回值 

//自定义类型
class Person {
    name: string;
    age: number;
}

var zhangsan: Person = new Person();
zhangsan.name = "zhangsan";
zhangsan.age = 20;

//参数默认值
function fn2 (a:string,b:string,c:string = "z") {
    console.log(a,b,c);
}
fn2("x","y","z");
//如果参数没有默认值 则少传参数会报错 带默认值的参数必须放到最后面
fn2("x","y");
function fn3 (a:string,b?:string,c:string = "z") {
    console.log(a,b,c);
}
//? 可选参数 不是必传参数 可选参数必须声明在必选参数的后面