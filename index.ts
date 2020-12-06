const w : number = window.innerWidth 
const h : number = window.innerHeight 
const parts : number = 4 
const scGap : number = 0.02 / parts  
const strokeFactor : number = 90 
const sizeFactor : number = 8.9 
const delay : number = 20 
const backColor : string = "#bdbdbd"
const colors : Array<string> = [
    "#F44336",
    "#9C27B0",
    "#4CAF50",
    "#03A9F4",
    "#009688"
]

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.max(0)
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}