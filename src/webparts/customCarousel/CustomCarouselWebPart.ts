import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CustomCarouselWebPartStrings';
import CustomCarousel from './components/CustomCarousel';
import { ICustomCarouselProps } from './components/ICustomCarouselProps';

export interface ICustomCarouselWebPartProps {
  description: string;
  url: string;
  CarouselDesc: string;
  CarouselName: string;
}

export default class CustomCarouselWebPart extends BaseClientSideWebPart<ICustomCarouselWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICustomCarouselProps> = React.createElement(
      CustomCarousel,
      {
        description: this.properties.description,
        url: this.properties.url,
        CarouselDesc: this.properties.CarouselDesc,
        CarouselName: this.properties.CarouselName,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
