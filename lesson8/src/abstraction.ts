abstract class Shape {
    abstract name: string;
    abstract getArea(): number;

    getInfo(): string {
        return `This is a shape: ${this.name}`;
    }
}

class Rectangle extends Shape {
    name = 'Rectangle';
    constructor(public width: number, public height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Shape {
    name = 'Square';
    constructor(public size: number) {
        super();
    }

    getArea(): number {
        return this.size * this.size;
    }
}

class ShapePrinter {
    constructor(private shape: Shape) {}

    print(): void {
        console.log(`${this.shape.getInfo()} — Area: ${this.shape.getArea()}`);
    }
}

export { Shape, Rectangle, Square, ShapePrinter };
