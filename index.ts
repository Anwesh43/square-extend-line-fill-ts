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

class DrawingUtil {

    static drawLine(context : CanvasRenderingContext2D, x1 : number, y1 : number, x2 : number, y2 : number) {
        context.beginPath()
        context.moveTo(x1, y1)
        context.lineTo(x2, y2)
        context.stroke()
    } 

    static drawExtendLineFill(context : CanvasRenderingContext2D, size : number, sf3 : number) {
        context.beginPath()
        context.moveTo(size, -size)
        context.lineTo(2 * size, -2 * size)
        context.lineTo(2 * size, 2 * size)
        context.lineTo(size, size)
        context.clip()
        context.fillRect(-size, -2 * size, 2 * size * sf3, 4 * size * sf3)
    }

    static drawSquareExtendLineFill(context : CanvasRenderingContext2D, scale : number) {
        const size : number = Math.min(w, h) / sizeFactor 
        const sf : number = ScaleUtil.sinify(scale)
        const sf1 : number = ScaleUtil.divideScale(sf, 0, parts)
        const sf2 : number = ScaleUtil.divideScale(sf, 1, parts)
        const sf3 : number = ScaleUtil.divideScale(sf, 2, parts)
        const sf4 : number = ScaleUtil.divideScale(sf, 3, parts)
        context.save()
        context.translate(w / 2, h / 2)
        context.fillRect(-size * sf1, -size * sf1, size * sf1, size * sf1)
        for (var j = 0; j < 2; j++) {
            DrawingUtil.drawLine(context, size, -size, size + size * sf2, size * (1 - 2 * j) * (1 + sf2))
        }
        context.restore()
    }

    static drawSELFNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        context.lineCap = 'round'
        context.lineWidth = Math.min(w, h) / strokeFactor 
        context.strokeStyle = colors[i]
        context.fillStyle = colors[i]
        DrawingUtil.drawSquareExtendLineFill(context, scale)
    } 
}