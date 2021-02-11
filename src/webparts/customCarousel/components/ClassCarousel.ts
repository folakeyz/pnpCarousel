import { ICarousel } from "./ICarousel";
export class ClassCarousel{
    public url:string;
    public CarouselDesc:string;
    public CarouselName:string;

    constructor(item: ICarousel){
        this.url = item.url;
        this.CarouselDesc = item.CarouselDesc;
        this.CarouselName = item.CarouselName;
    }
}