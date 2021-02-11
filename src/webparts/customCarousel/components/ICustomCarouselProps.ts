import { WebPartContext } from "@microsoft/sp-webpart-base"; 
export interface ICustomCarouselProps {
  description: string;
  url: string;
  CarouselDesc: string;
  CarouselName: string;
  context:WebPartContext; 
}
