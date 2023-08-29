declare module 'lodash' {
    function mulitply(multiplier: number, multiplicand: number): number;

    // function reverse(array: Array): Array;

    // function reverse(array: string[]): string[];
    // function reverse(array: number[]): number[];

    function reverse<Type>(array: Type[]): Type[];

    function dropRight(array: Array, num: number): Array;
    
    function dropRight<T>(array: T[], num: number = 1): T[];
}

