import * as React from 'react';
import styles from './CustomCarousel.module.scss';
import { ICustomCarouselProps } from './ICustomCarouselProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Carousel, CarouselButtonsLocation, CarouselButtonsDisplay, CarouselIndicatorShape } from "@pnp/spfx-controls-react/lib/Carousel";
import * as jQuery from "jquery";
import { ICarouselProps } from './ICarouselProps';
import { ClassCarousel } from './ClassCarousel';
import { ICarousel } from './ICarousel';
import { Web } from "sp-pnp-js";

export default class CustomCarousel extends React.Component<ICustomCarouselProps, any> {
  public constructor(props:ICarouselProps,any)
  {
      
      super(props);
      this.state={
          items:[],
      }

    }
 
  public render(): React.ReactElement<ICustomCarouselProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <div className={ styles.customCarousel }>

     <Carousel
  buttonsLocation={CarouselButtonsLocation.center}
  buttonsDisplay={CarouselButtonsDisplay.buttonsOnly}
  contentContainerStyles={styles.carouselImageContent}
  isInfinite={true}
  indicatorShape={CarouselIndicatorShape.circle}
  pauseOnHover={true}

  element={

    this.state.items.map(function(item:ICarousel){
      return(
        {
          imageSrc: item.CarouselDesc,
          title: item.CarouselName,
          description: 'Click to View',
          url: item.url,
          showDetailsOnHover: true,
          // imageFit: ImageFit.cover
        }
   )  
  })

  }
  onMoveNextClicked={(index: number) => { console.log(`Next button clicked: ${index}`); }}
  onMovePrevClicked={(index: number) => { console.log(`Prev button clicked: ${index}`); }}
/>
      </div>
    );
  }

  public componentDidMount()
  {
      
      // debugger;
      this._NewsList();
  }
  private _NewsList():void
  {
  
   
  let web = new Web(this.props.context.pageContext.web.absoluteUrl);  
  web.lists.getByTitle(`Banners`).items.get().then
  
      ((response)=>{

          let NewsCollection=response.map(item=> new ClassCarousel(item)).reverse();
          let NewsCard = NewsCollection;
          this.setState({items:NewsCard});

      }
  
      )
  }

}
