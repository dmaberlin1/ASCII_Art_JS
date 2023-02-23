const canvas=document.getElementById('canvas1')
const ctx=canvas.getContext('2d');
import image1 from "./imageSrc";

image1.src='';

class AsciiEffect{
    #imageCellArray=[];
    #symbols=[];
    #pixels=[];
    #ctx;
    #width;
    #height;
    constructor(ctx,width,height) {
        this.#ctx=ctx
        this.#width=width
        this.#height=height;
        this.#ctx.drawImage(image1,0,0,this.#width,this.#height);
    }
}

let effect;
image1.onload=function initialize() {
    canvas.width=image1.width
    canvas.height=image1.height
    effect=new AsciiEffect(ctx,image1.width,image1.height)

}
