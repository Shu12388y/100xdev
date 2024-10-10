//------------   We will learn what is promises ------------

// Classes

class Rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        return this.width * this.height
    }

    paint(){
        return this.color
    }
}

const rec = new Rectangle(2,3,"red"); 
const area = rec.area();
console.log(area)

const rectColor = rec.paint()
console.log(rectColor)