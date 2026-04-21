import { capitalize } from "./string";

test("capitalize 'hello' to equal 'Hello'", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("capitalize '' to equal ''", () => {
    expect(capitalize("")).toBe("");
});

test("capitalize '123' to equal '123'", () => {
    expect(capitalize("123")).toBe("123");
});